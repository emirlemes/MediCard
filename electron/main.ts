import { app, BrowserWindow, dialog } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { createDatabaseBackup, getDatabase, seedDatabase } from './database'
import type { DatabaseClient } from './database'
import { csvDocument } from './csv'
import { registerIpc } from './ipc'

let mainWindow: BrowserWindow | null = null
let activeDatabasePath: string | null = null
let closingAfterBackup = false
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const automaticBackupLimit = 30
const defaultPeriodicBackupIntervalMs = 30 * 60 * 1000
const periodicBackupIntervalMs = Number(process.env.MEDICARD_PERIODIC_BACKUP_INTERVAL_MS ?? defaultPeriodicBackupIntervalMs)
const csvBackupRetentionDays = 14
let periodicBackupTimer: NodeJS.Timeout | null = null
let periodicBackupRunning = false
let periodicBackupPromise: Promise<void> | null = null
let lastPeriodicDatabaseSignature: string | null = null

async function pruneAutomaticBackups(backupDirectory: string) {
  const entries = await fs.readdir(backupDirectory, { withFileTypes: true })
  const backups = await Promise.all(entries
    .filter((entry) => entry.isFile() && (entry.name.startsWith('clinic-auto-') || entry.name.startsWith('auto-')) && entry.name.endsWith('.db'))
    .map(async (entry) => ({
      path: path.join(backupDirectory, entry.name),
      modifiedAt: (await fs.stat(path.join(backupDirectory, entry.name))).mtimeMs,
    })))
  backups.sort((left, right) => right.modifiedAt - left.modifiedAt)
  await Promise.all(backups.slice(automaticBackupLimit).map((backup) => fs.unlink(backup.path)))
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

async function pruneCsvBackups(csvDirectory: string) {
  const entries = await fs.readdir(csvDirectory, { withFileTypes: true })
  const folders = entries
    .filter((entry) => entry.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(entry.name))
    .map((entry) => ({ name: entry.name, path: path.join(csvDirectory, entry.name) }))
    .sort((left, right) => right.name.localeCompare(left.name))
  await Promise.all(folders.slice(csvBackupRetentionDays).map((folder) => fs.rm(folder.path, { recursive: true, force: true })))
}

async function writeCsvIfNotEmpty(directory: string, fileName: string, headers: string[], rows: unknown[][]) {
  if (rows.length === 0) return
  await fs.writeFile(path.join(directory, fileName), csvDocument(headers, rows), 'utf8')
}

async function createDailyCsvBackup(database: DatabaseClient, userDataDirectory: string) {
  const csvDirectory = path.join(userDataDirectory, 'backups', 'csv')
  const dateKey = localDateKey()
  const backupDirectory = path.join(csvDirectory, dateKey)
  const completionMarker = path.join(backupDirectory, '.complete')
  try {
    await fs.access(completionMarker)
    return
  } catch {
    // The daily export has not completed yet.
  }

  await fs.mkdir(backupDirectory, { recursive: true })
  const [patients, examinations, therapies, therapyItems, departments, settings] = await Promise.all([
    database.patient.findMany({ orderBy: { id: 'asc' } }),
    database.examination.findMany({ orderBy: { id: 'asc' } }),
    database.therapy.findMany({ orderBy: { id: 'asc' } }),
    database.therapyItem.findMany({ orderBy: { id: 'asc' } }),
    database.department.findMany({ orderBy: { id: 'asc' } }),
    database.clinicSettings.findMany({ orderBy: { id: 'asc' } }),
  ])

  await writeCsvIfNotEmpty(backupDirectory, 'Patient.csv', ['id', 'recordNumber', 'firstName', 'lastName', 'dateOfBirth', 'nationalId', 'address', 'phone', 'note', 'lockedAt', 'createdAt', 'updatedAt'], patients.map((patient) => [patient.id, patient.recordNumber, patient.firstName, patient.lastName, patient.dateOfBirth?.toISOString(), patient.nationalId, patient.address, patient.phone, patient.note, patient.lockedAt?.toISOString(), patient.createdAt.toISOString(), patient.updatedAt.toISOString()]))
  await writeCsvIfNotEmpty(backupDirectory, 'Examination.csv', ['id', 'patientId', 'departmentId', 'examinationAt', 'doctorName', 'diagnosis', 'findings', 'recommendation', 'createdAt', 'updatedAt'], examinations.map((examination) => [examination.id, examination.patientId, examination.departmentId, examination.examinationAt.toISOString(), examination.doctorName, examination.diagnosis, examination.findings, examination.recommendation, examination.createdAt.toISOString(), examination.updatedAt.toISOString()]))
  await writeCsvIfNotEmpty(backupDirectory, 'Therapy.csv', ['id', 'examinationId', 'createdAt', 'updatedAt'], therapies.map((therapy) => [therapy.id, therapy.examinationId, therapy.createdAt.toISOString(), therapy.updatedAt.toISOString()]))
  await writeCsvIfNotEmpty(backupDirectory, 'TherapyItem.csv', ['id', 'therapyId', 'medicineName', 'dosage', 'administrationRoute', 'duration', 'note', 'createdAt'], therapyItems.map((item) => [item.id, item.therapyId, item.medicineName, item.dosage, item.administrationRoute, item.duration, item.note, item.createdAt.toISOString()]))
  await writeCsvIfNotEmpty(backupDirectory, 'Department.csv', ['id', 'name', 'active', 'createdAt', 'updatedAt'], departments.map((department) => [department.id, department.name, department.active, department.createdAt.toISOString(), department.updatedAt.toISOString()]))
  await writeCsvIfNotEmpty(backupDirectory, 'ClinicSettings.csv', ['id', 'clinicName', 'address', 'phone', 'email', 'doctorName', 'departmentId', 'createdAt', 'updatedAt'], settings.map((setting) => [setting.id, setting.clinicName, setting.address, setting.phone, setting.email, setting.doctorName, setting.departmentId, setting.createdAt.toISOString(), setting.updatedAt.toISOString()]))
  await fs.writeFile(completionMarker, new Date().toISOString(), 'utf8')
  await pruneCsvBackups(csvDirectory)
  console.info(`Daily CSV backup completed for ${dateKey}`)
}

async function runPeriodicDatabaseBackup(databasePath: string, userDataDirectory: string) {
  if (periodicBackupRunning) return
  periodicBackupRunning = true
  try {
    const databaseStats = await fs.stat(databasePath)
    const walPath = `${databasePath}-wal`
    let walStats: { mtimeMs: number; size: number } | null = null
    try {
      const stats = await fs.stat(walPath)
      walStats = { mtimeMs: stats.mtimeMs, size: stats.size }
    } catch {
      // SQLite may not have a WAL file when there are no pending WAL pages.
    }
    const databaseSignature = `${databaseStats.mtimeMs}:${databaseStats.size}:${walStats?.mtimeMs ?? 0}:${walStats?.size ?? 0}`
    // Skip unchanged databases so the periodic scheduler does not create redundant copies.
    if (databaseSignature === lastPeriodicDatabaseSignature) {
      console.info('Periodic database backup skipped: database is unchanged')
      return
    }
    const backupDirectory = path.join(userDataDirectory, 'backups')
    await fs.mkdir(backupDirectory, { recursive: true })
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    await createDatabaseBackup(databasePath, path.join(backupDirectory, `auto-${timestamp}.db`))
    await pruneAutomaticBackups(backupDirectory)
    const updatedDatabaseStats = await fs.stat(databasePath)
    let updatedWalSignature = '0:0'
    try {
      const updatedWalStats = await fs.stat(walPath)
      updatedWalSignature = `${updatedWalStats.mtimeMs}:${updatedWalStats.size}`
    } catch {
      // The checkpoint may have removed the WAL file after the backup.
    }
    lastPeriodicDatabaseSignature = `${updatedDatabaseStats.mtimeMs}:${updatedDatabaseStats.size}:${updatedWalSignature}`
    console.info(`Periodic database backup completed: ${timestamp}`)
  } catch (error) {
    console.error('Periodic database backup failed:', error)
  } finally {
    periodicBackupRunning = false
  }
}

function createWindow() {
  const runtimeIcon = process.platform === 'win32'
    ? path.join(currentDirectory, '../assets/icons/windows/icon.ico')
    : process.platform === 'linux'
      ? path.join(currentDirectory, '../assets/icons/linux/icons/512x512.png')
      : undefined
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 920,
    title: 'MediCard',
    ...(runtimeIcon ? { icon: runtimeIcon } : {}),
    minWidth: 1080,
    minHeight: 700,
    backgroundColor: '#f4f7f6',
    webPreferences: {
      preload: path.join(currentDirectory, 'preload.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    void mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    void mainWindow.loadFile(path.join(currentDirectory, '../dist/index.html'))
  }
}

app.whenReady().then(async () => {
  const databasePath = path.join(app.getPath('userData'), 'clinic.db')
  activeDatabasePath = databasePath
  const database = getDatabase(databasePath)
  await seedDatabase(databasePath)
  const userDataDirectory = app.getPath('userData')
  void createDailyCsvBackup(database, userDataDirectory).catch((error) => console.error('Daily CSV backup failed:', error))
  console.info(`Periodic database backup scheduler started with interval ${periodicBackupIntervalMs}ms`)
  periodicBackupPromise = runPeriodicDatabaseBackup(databasePath, userDataDirectory)
  periodicBackupTimer = setInterval(() => {
    periodicBackupPromise = runPeriodicDatabaseBackup(databasePath, userDataDirectory)
  }, periodicBackupIntervalMs)
  registerIpc(database, databasePath)
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).catch((error: unknown) => {
  const message = error instanceof Error ? `${error.name}: ${error.message}\n\n${error.stack ?? ''}` : String(error)
  console.error('Clinic startup failed:', message)
  void fs.writeFile(path.join(app.getPath('userData'), 'startup-error.log'), message, 'utf8').catch(() => undefined)
  if (app.isReady()) dialog.showErrorBox('MediCard se nije pokrenuo', message)
  app.quit()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', (event) => {
  if (closingAfterBackup || !activeDatabasePath) return
  if (periodicBackupTimer) {
    clearInterval(periodicBackupTimer)
    periodicBackupTimer = null
  }
  event.preventDefault()
  closingAfterBackup = true
  void (async () => {
    try {
      if (periodicBackupPromise) await periodicBackupPromise
      await fs.mkdir(path.join(app.getPath('userData'), 'backups'), { recursive: true })
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const backupDirectory = path.join(app.getPath('userData'), 'backups')
      await createDatabaseBackup(activeDatabasePath!, path.join(backupDirectory, `clinic-auto-${timestamp}.db`))
      await pruneAutomaticBackups(backupDirectory)
    } catch (error) {
      console.error('Automatic backup failed:', error)
    } finally {
      app.quit()
    }
  })()
})