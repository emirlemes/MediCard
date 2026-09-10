import { app, BrowserWindow, dialog, ipcMain } from 'electron'
import type { PrismaClient } from '@prisma/client'
import fs from 'node:fs/promises'
import path from 'node:path'
import { closeDatabase } from './database'

type ReportInput = {
  patient: { id: string; firstName: string; lastName: string; recordNumber: string; dateOfBirth: string | null; nationalId: string | null; phone: string | null; address: string | null }
  examination: { examinationAt: string; doctorName: string; diagnosis: string | null; findings: string | null; recommendation: string | null; department: { name: string }; therapy: { items: { medicineName: string; dosage: string | null; administrationRoute: string | null; duration: string | null; note: string | null }[] } | null }
  settings: { clinicName: string; address: string; phone: string; email: string; doctorName: string } | null
}

function escapeHtml(value: unknown) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character)
}

function escapeCsv(value: unknown) {
  const text = String(value ?? '').replace(/\r?\n/g, ' ')
  return /[",;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

function reportHtml(report: ReportInput) {
  const { patient, examination, settings } = report
  const therapy = examination.therapy?.items ?? []
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @page { size: A4; margin: 18mm 18mm 20mm; } * { box-sizing: border-box; }
    body { margin: 0; color: #243b39; font: 11pt Arial, sans-serif; line-height: 1.45; }
    header { display: flex; justify-content: space-between; border-bottom: 2px solid #23786d; padding-bottom: 15px; }
    h1 { margin: 0 0 4px; font-size: 20pt; } h2 { margin: 23px 0 9px; color: #23786d; font-size: 12pt; text-transform: uppercase; letter-spacing: .08em; }
    .muted { color: #6d8580; } .clinic { text-align: right; } .clinic strong { display: block; font-size: 13pt; }
    .patient { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 25px; background: #f0f6f3; padding: 13px; }
    .patient span, .meta span { display: block; } .label { color: #6d8580; font-size: 9pt; text-transform: uppercase; letter-spacing: .04em; }
    .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 7px 25px; border-bottom: 1px solid #dbe7e3; padding-bottom: 12px; }
    .content { white-space: pre-wrap; min-height: 25px; } .medicine { border-bottom: 1px solid #dbe7e3; padding: 7px 0; }
    footer { margin-top: 48px; display: flex; justify-content: flex-end; } .signature { width: 190px; padding-top: 28px; text-align: center; border-top: 1px solid #607b75; }
  </style></head><body>
    <header><div><h1>${escapeHtml(settings?.clinicName || 'Poliklinika Šabanović')}</h1><div class="muted">${escapeHtml(examination.department.name)}</div></div><div class="clinic"><strong>${escapeHtml(settings?.address)}</strong><span>${escapeHtml(settings?.phone)} ${settings?.email ? `· ${escapeHtml(settings.email)}` : ''}</span></div></header>
    <h2>Podaci pacijenta</h2><div class="patient"><span><span class="label">Ime i prezime</span>${escapeHtml(patient.firstName)} ${escapeHtml(patient.lastName)}</span><span><span class="label">Broj kartona</span>${escapeHtml(patient.recordNumber)}</span><span><span class="label">Datum rođenja</span>${escapeHtml(patient.dateOfBirth || 'Nije uneseno')}</span><span><span class="label">JMBG</span>${escapeHtml(patient.nationalId || 'Nije uneseno')}</span><span><span class="label">Telefon</span>${escapeHtml(patient.phone || 'Nije uneseno')}</span><span><span class="label">Adresa</span>${escapeHtml(patient.address || 'Nije uneseno')}</span></div>
    <h2>Pregled</h2><div class="meta"><span><span class="label">Datum pregleda</span>${escapeHtml(examination.examinationAt)}</span><span><span class="label">Doktor</span>${escapeHtml(examination.doctorName)}</span><span><span class="label">Dijagnoza</span>${escapeHtml(examination.diagnosis || 'Nije unesena')}</span></div>
    <h2>Nalaz</h2><div class="content">${escapeHtml(examination.findings || 'Nije unesen')}</div><h2>Terapija</h2>${therapy.length ? therapy.map((item) => `<div class="medicine"><strong>${escapeHtml(item.medicineName)}</strong> ${escapeHtml(item.dosage)} ${item.administrationRoute ? `· ${escapeHtml(item.administrationRoute)}` : ''} ${item.duration ? `· ${escapeHtml(item.duration)}` : ''}${item.note ? `<div class="muted">${escapeHtml(item.note)}</div>` : ''}</div>`).join('') : '<div class="muted">Nije propisana terapija.</div>'}<h2>Preporuka</h2><div class="content">${escapeHtml(examination.recommendation || 'Nije unesena')}</div><footer><div class="signature">${escapeHtml(examination.doctorName)}<br><span class="muted">Doktor</span></div></footer>
  </body></html>`
}

async function createReportWindow(html: string) {
  const window = new BrowserWindow({ show: false, width: 794, height: 1123, webPreferences: { contextIsolation: true, nodeIntegration: false } })
  await window.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`)
  return window
}

export function registerIpc(database: PrismaClient, databasePath: string) {
  ipcMain.handle('app:quit', () => {
    app.quit()
    return { closed: true }
  })

  ipcMain.handle('departments:list', async () => database.department.findMany({ orderBy: { name: 'asc' } }))

  ipcMain.handle('departments:create', async (_event, input: { name: string }) => database.department.create({
    data: { name: input.name.trim() },
  }))

  ipcMain.handle('departments:update', async (_event, input: { id: string; name: string }) => {
    const name = input.name.trim()
    if (!name) throw new Error('Naziv odjela je obavezan.')
    const duplicate = await database.department.findFirst({ where: { name, NOT: { id: input.id } } })
    if (duplicate) throw new Error('Odjel sa tim nazivom već postoji.')
    return database.department.update({ where: { id: input.id }, data: { name } })
  })

  ipcMain.handle('departments:set-active', async (_event, input: { id: string; active: boolean }) => database.department.update({
    where: { id: input.id },
    data: { active: input.active },
  }))

  ipcMain.handle('settings:get', async () => database.clinicSettings.findUnique({ where: { id: 1 } }))

  ipcMain.handle('settings:update', async (_event, input: { clinicName: string; address: string; phone: string; email: string; doctorName: string; departmentId?: string }) => database.clinicSettings.update({
    where: { id: 1 },
    data: input,
  }))

  ipcMain.handle('patients:list', async (_event, search = '') => database.patient.findMany({
    where: search ? { OR: [{ firstName: { contains: search } }, { lastName: { contains: search } }, { recordNumber: { contains: search } }] } : undefined,
    orderBy: { updatedAt: 'desc' },
  }))

  ipcMain.handle('patients:create', async (_event, input: { firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => database.patient.create({
    data: { ...input, dateOfBirth: input.dateOfBirth ? new Date(input.dateOfBirth) : undefined },
  }))

  ipcMain.handle('patients:update', async (_event, input: { id: string; firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => {
    const patient = await database.patient.findUnique({ where: { id: input.id }, select: { lockedAt: true } })
    if (patient?.lockedAt) throw new Error('Karton je zaključan nakon štampanja.')
    return database.patient.update({
      where: { id: input.id },
      data: {
        firstName: input.firstName.trim(),
        lastName: input.lastName.trim(),
        recordNumber: input.recordNumber.trim(),
        phone: input.phone?.trim() || null,
        dateOfBirth: input.dateOfBirth ? new Date(input.dateOfBirth) : null,
        nationalId: input.nationalId?.trim() || null,
        address: input.address?.trim() || null,
        note: input.note?.trim() || null,
      },
    })
  })

  ipcMain.handle('patients:get', async (_event, id: string) => database.patient.findUnique({
    where: { id },
    include: {
      examinations: {
        orderBy: { examinationAt: 'desc' },
        include: { department: true, therapy: { include: { items: true } } },
      },
    },
  }))

  ipcMain.handle('patients:export-csv', async (event, patients: { firstName: string; lastName: string; recordNumber: string; dateOfBirth: string | null; nationalId: string | null; phone: string | null; address: string | null; note: string | null }[]) => {
    const owner = BrowserWindow.fromWebContents(event.sender)
    const result = await dialog.showSaveDialog(owner ?? undefined, { title: 'Izvezi pacijente', defaultPath: path.join(app.getPath('documents'), 'pacijenti.csv'), filters: [{ name: 'CSV za Excel', extensions: ['csv'] }] })
    if (result.canceled || !result.filePath) return { saved: false }
    const header = ['Ime', 'Prezime', 'Broj kartona', 'Datum rođenja', 'JMBG', 'Telefon', 'Adresa', 'Napomena']
    const rows = patients.map((patient) => [patient.firstName, patient.lastName, patient.recordNumber, patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString('bs-BA') : '', patient.nationalId, patient.phone, patient.address, patient.note].map(escapeCsv).join(';'))
    await fs.writeFile(result.filePath, `\ufeff${header.map(escapeCsv).join(';')}\n${rows.join('\n')}`, 'utf8')
    return { saved: true, filePath: result.filePath }
  })

  ipcMain.handle('examinations:create', async (_event, input: { patientId: string; departmentId: string; examinationAt: string; doctorName: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => database.examination.create({
    data: {
      patientId: input.patientId,
      departmentId: input.departmentId,
      examinationAt: new Date(input.examinationAt),
      doctorName: input.doctorName.trim(),
      diagnosis: input.diagnosis?.trim() || undefined,
      findings: input.findings?.trim() || undefined,
      recommendation: input.recommendation?.trim() || undefined,
      therapy: input.therapyItems.length > 0 ? { create: { items: { create: input.therapyItems.map((item) => ({ ...item, medicineName: item.medicineName.trim() })) } } } : undefined,
    },
    include: { department: true, therapy: { include: { items: true } } },
  }))

  ipcMain.handle('examinations:update', async (_event, input: { id: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems?: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => {
    const examination = await database.examination.findUnique({ where: { id: input.id }, include: { patient: { select: { lockedAt: true } } } })
    if (!examination) throw new Error('Nalaz nije pronađen.')
    if (examination.patient.lockedAt) throw new Error('Karton je zaključan nakon štampanja.')
    return database.$transaction(async (transaction) => {
      const updated = await transaction.examination.update({ where: { id: input.id }, data: { diagnosis: input.diagnosis?.trim() || null, findings: input.findings?.trim() || null, recommendation: input.recommendation?.trim() || null }, include: { department: true, therapy: { include: { items: true } } } })
      if (input.therapyItems) {
        await transaction.therapy.deleteMany({ where: { examinationId: input.id } })
        if (input.therapyItems.length > 0) {
          await transaction.therapy.create({ data: { examinationId: input.id, items: { create: input.therapyItems.filter((item) => item.medicineName.trim()).map((item) => ({ medicineName: item.medicineName.trim(), dosage: item.dosage?.trim() || null, administrationRoute: item.administrationRoute?.trim() || null, duration: item.duration?.trim() || null, note: item.note?.trim() || null })) } }, include: { items: true } })
        }
      }
      return transaction.examination.findUniqueOrThrow({ where: { id: input.id }, include: { department: true, therapy: { include: { items: true } } } })
    })
  })

  ipcMain.handle('examinations:export-csv', async (event, input: { patientName: string; recordNumber: string; examinations: { examinationAt: string; doctorName: string; diagnosis: string | null; findings: string | null; recommendation: string | null; department: { name: string }; therapy: { items: { medicineName: string; dosage: string | null; duration: string | null }[] } | null }[] }) => {
    const owner = BrowserWindow.fromWebContents(event.sender)
    const result = await dialog.showSaveDialog(owner ?? undefined, { title: 'Izvezi preglede', defaultPath: path.join(app.getPath('documents'), `pregledi-${input.recordNumber}.csv`), filters: [{ name: 'CSV za Excel', extensions: ['csv'] }] })
    if (result.canceled || !result.filePath) return { saved: false }
    const header = ['Pacijent', 'Broj kartona', 'Datum pregleda', 'Odjel', 'Doktor', 'Dijagnoza', 'Nalaz', 'Preporuka', 'Terapija']
    const rows = input.examinations.map((examination) => [input.patientName, input.recordNumber, new Date(examination.examinationAt).toLocaleString('bs-BA'), examination.department.name, examination.doctorName, examination.diagnosis, examination.findings, examination.recommendation, examination.therapy?.items.map((item) => [item.medicineName, item.dosage, item.duration].filter(Boolean).join(' - ')).join(', ')].map(escapeCsv).join(';'))
    await fs.writeFile(result.filePath, `\ufeff${header.map(escapeCsv).join(';')}\n${rows.join('\n')}`, 'utf8')
    return { saved: true, filePath: result.filePath }
  })

  ipcMain.handle('reports:pdf', async (event, report: ReportInput) => {
    const owner = BrowserWindow.fromWebContents(event.sender)
    const result = await dialog.showSaveDialog(owner ?? undefined, { title: 'Sačuvaj nalaz kao PDF', defaultPath: `nalaz-${report.patient.recordNumber}.pdf`, filters: [{ name: 'PDF dokument', extensions: ['pdf'] }] })
    if (result.canceled || !result.filePath) return { saved: false }
    const reportWindow = await createReportWindow(reportHtml(report))
    const pdf = await reportWindow.webContents.printToPDF({ printBackground: true, pageSize: 'A4' })
    await fs.writeFile(result.filePath, pdf)
    reportWindow.close()
    return { saved: true, filePath: result.filePath }
  })

  ipcMain.handle('reports:print', async (_event, report: ReportInput) => {
    const reportWindow = await createReportWindow(reportHtml(report))
    const printers = await reportWindow.webContents.getPrintersAsync()
    if (printers.length === 0) {
      reportWindow.close()
      return { printed: false, reason: 'Nema dostupnih printera.' }
    }
    await new Promise<void>((resolve, reject) => reportWindow.webContents.print({ silent: false, printBackground: true }, (success, reason) => success ? resolve() : reject(new Error(reason || 'Štampanje nije uspjelo'))))
    reportWindow.close()
    await database.patient.update({ where: { id: report.patient.id }, data: { lockedAt: new Date() } })
    return { printed: true, lockedAt: new Date().toISOString() }
  })

  ipcMain.handle('backup:create', async (event) => {
    const owner = BrowserWindow.fromWebContents(event.sender)
    const date = new Date().toISOString().slice(0, 10)
    const result = await dialog.showSaveDialog(owner ?? undefined, { title: 'Napravi backup baze', defaultPath: path.join(app.getPath('documents'), `clinic-backup-${date}.db`), filters: [{ name: 'SQLite baza', extensions: ['db'] }] })
    if (result.canceled || !result.filePath) return { saved: false }
    await fs.copyFile(databasePath, result.filePath)
    return { saved: true, filePath: result.filePath }
  })

  ipcMain.handle('backup:restore', async (event) => {
    const owner = BrowserWindow.fromWebContents(event.sender)
    const result = await dialog.showOpenDialog(owner ?? undefined, { title: 'Vrati backup baze', properties: ['openFile'], filters: [{ name: 'SQLite baza', extensions: ['db'] }] })
    const backupPath = result.filePaths[0]
    if (result.canceled || !backupPath) return { restored: false }
    await closeDatabase()
    await fs.copyFile(backupPath, databasePath)
    setImmediate(() => { app.relaunch(); app.exit(0) })
    return { restored: true }
  })

  ipcMain.handle('dashboard:summary', async () => {
    const [patients, examinations, recentPatients, recentExaminations] = await Promise.all([
      database.patient.count(),
      database.examination.count(),
      database.patient.findMany({ orderBy: { updatedAt: 'desc' }, take: 5 }),
      database.examination.findMany({ orderBy: { examinationAt: 'desc' }, take: 5, include: { patient: true, department: true } }),
    ])
    return { patients, examinations, recentPatients, recentExaminations }
  })
}