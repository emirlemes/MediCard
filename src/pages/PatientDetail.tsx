import {useEffect, useState} from 'react'
import {ArrowUpRight, ClipboardList, Plus, Trash2, Users} from 'lucide-react'
import {Heading} from '../components/Heading'
import {formatDate, initials} from '../utils/formatters'

export function PatientDetailPage({
  patientId,
  onBack,
  onNewExamination,
  onPatientUpdated
}: {
  patientId: string
  onBack: () => void
  onNewExamination: () => void
  onPatientUpdated: (patient: PatientRecord) => void
}) {
  const [patient, setPatient] = useState<PatientDetail | null>(null)
  const [loadingError, setLoadingError] = useState<{patientId: string; message: string} | null>(null)
  const [selectedExamination, setSelectedExamination] = useState<ExaminationRecord | null>(null)
  const [editing, setEditing] = useState(false)
  useEffect(() => {
    void window.clinic.patients
      .get(patientId)
      .then((loadedPatient) => {
        if (!loadedPatient) {
          setLoadingError({patientId, message: 'Pacijent nije pronađen.'})
          return
        }
        setPatient(loadedPatient)
      })
      .catch(() => setLoadingError({patientId, message: 'Karton nije moguće učitati.'}))
  }, [patientId])
  if (loadingError?.patientId === patientId)
    return (
      <section className="panel empty-form">
        <Users size={30} />
        <h2>Greška pri učitavanju</h2>
        <p>{loadingError.message}</p>
        <button className="secondary-button" type="button" onClick={onBack}>
          Nazad na pacijente
        </button>
      </section>
    )
  if (!patient)
    return (
      <section className="panel empty-form">
        <Users size={30} />
        <h2>Učitavanje kartona</h2>
        <p>Pripremamo podatke pacijenta.</p>
      </section>
    )
  async function exportExaminations() {
    if (!patient) return
    const result = await window.clinic.examinations.exportCsv({
      patientName: `${patient.firstName} ${patient.lastName}`,
      recordNumber: patient.recordNumber,
      examinations: patient.examinations
    })
    if (result.saved) setSelectedExamination(null)
  }
  return (
    <>
      <button className="back-button" type="button" onClick={onBack}>
        <ArrowUpRight size={15} /> Nazad na pacijente
      </button>
      <Heading
        eyebrow="KARTON PACIJENTA"
        title={`${patient.firstName} ${patient.lastName}`}
        subtitle={`Karton ${patient.recordNumber}`}
        action={
          <button className="secondary-button" type="button" onClick={() => setEditing(true)}>
            Uredi podatke
          </button>
        }
      />
      <section className="patient-summary panel">
        <div className="large-patient-avatar">{initials(`${patient.firstName} ${patient.lastName}`)}</div>
        <div>
          <h2>Osnovni podaci</h2>
          <div className="patient-facts">
            <span>
              <strong>Datum rođenja</strong>
              {patient.dateOfBirth ? formatDate(patient.dateOfBirth) : 'Nije uneseno'}
            </span>
            <span>
              <strong>JMBG</strong>
              {patient.nationalId || 'Nije uneseno'}
            </span>
            <span>
              <strong>Telefon</strong>
              {patient.phone || 'Nije uneseno'}
            </span>
            <span>
              <strong>Adresa</strong>
              {patient.address || 'Nije uneseno'}
            </span>
          </div>
        </div>
      </section>
      <section className="panel history-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">HISTORIJA</p>
            <h2>Historija pregleda</h2>
          </div>
          <div className="heading-actions">
            <button className="secondary-button" type="button" onClick={() => void exportExaminations()}>
              Izvoz pregleda
            </button>
            <button
              className="primary-button"
              type="button"
              disabled={Boolean(patient.lockedAt)}
              onClick={onNewExamination}
            >
              <Plus size={17} /> {patient.lockedAt ? 'Karton zaključan' : 'Novi pregled'}
            </button>
          </div>
        </div>
        {patient.lockedAt && (
          <div className="locked-notice">
            Karton je zaključan nakon štampanja nalaza. Podaci i nalazi se više ne mogu mijenjati.
          </div>
        )}
        {patient.examinations.length === 0 ? (
          <div className="empty-form compact">
            <ClipboardList size={28} />
            <h2>Nema pregleda</h2>
            <p>Prvi pregled ovog pacijenta pojavit će se ovdje.</p>
          </div>
        ) : (
          <div className="history-list">
            {patient.examinations.map((examination) => (
              <article
                className="history-item"
                key={examination.id}
                tabIndex={0}
                role="button"
                onClick={() => setSelectedExamination(examination)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedExamination(examination)
                  }
                }}
              >
                <div className="history-date">
                  <strong>{formatDate(examination.examinationAt)}</strong>
                  <span>{examination.department.name}</span>
                </div>
                <div className="history-content">
                  <h3>{examination.diagnosis || 'Pregled bez dijagnoze'}</h3>
                  <p>Doktor: {examination.doctorName}</p>
                  {examination.findings && (
                    <div>
                      <strong>Nalaz</strong>
                      <p>{examination.findings}</p>
                    </div>
                  )}
                  {examination.therapy && examination.therapy.items.length > 0 && (
                    <div>
                      <strong>Terapija</strong>
                      <p>{examination.therapy.items.map((item) => item.medicineName).join(', ')}</p>
                    </div>
                  )}
                </div>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Otvori nalaz"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedExamination(examination)
                  }}
                >
                  <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
      {selectedExamination && (
        <ExaminationDialog
          examination={selectedExamination}
          locked={Boolean(patient.lockedAt)}
          onLocked={(lockedAt) => setPatient({...patient, lockedAt})}
          onUpdated={(updated) => {
            setPatient({
              ...patient,
              examinations: patient.examinations.map((item) => (item.id === updated.id ? updated : item))
            })
            setSelectedExamination(updated)
          }}
          onClose={() => setSelectedExamination(null)}
        />
      )}
      {editing && (
        <PatientEditor
          patient={patient}
          onClose={() => setEditing(false)}
          onSaved={(updated) => {
            setPatient({...patient, ...updated})
            onPatientUpdated(updated)
            setEditing(false)
          }}
        />
      )}
    </>
  )
}

function PatientEditor({
  patient,
  onClose,
  onSaved
}: {
  patient: PatientDetail
  onClose: () => void
  onSaved: (patient: PatientRecord) => void
}) {
  const locked = Boolean(patient.lockedAt)
  const [form, setForm] = useState({
    firstName: patient.firstName,
    lastName: patient.lastName,
    recordNumber: patient.recordNumber,
    dateOfBirth: patient.dateOfBirth?.slice(0, 10) ?? '',
    nationalId: patient.nationalId ?? '',
    address: patient.address ?? '',
    phone: patient.phone ?? '',
    note: patient.note ?? ''
  })
  const [error, setError] = useState('')
  async function save() {
    setError('')
    if (locked) {
      setError('Karton je zaključan nakon štampanja nalaza.')
      return
    }
    if (!form.firstName.trim() || !form.lastName.trim() || !form.recordNumber.trim()) {
      setError('Ime, prezime i broj kartona su obavezni.')
      return
    }
    try {
      onSaved(await window.clinic.patients.update({id: patient.id, ...form}))
    } catch {
      setError('Pacijent nije sačuvan. Provjerite da broj kartona nije duplikat.')
    }
  }
  return (
    <div className="modal-backdrop">
      <section className="modal panel">
        <div className="dialog-heading">
          <div>
            <p className="eyebrow">KARTON PACIJENTA</p>
            <h2>{locked ? 'Karton je zaključan' : 'Uredi podatke'}</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Zatvori uređivanje" onClick={onClose}>
            ×
          </button>
        </div>
        <p>{locked ? 'Podaci se ne mogu mijenjati nakon štampanja nalaza.' : 'Izmjene se čuvaju u lokalnoj bazi.'}</p>
        <div className="form-grid">
          <label>
            Ime
            <input
              disabled={locked}
              value={form.firstName}
              onChange={(event) => setForm({...form, firstName: event.target.value})}
            />
          </label>
          <label>
            Prezime
            <input
              disabled={locked}
              value={form.lastName}
              onChange={(event) => setForm({...form, lastName: event.target.value})}
            />
          </label>
          <label>
            Broj kartona
            <input
              disabled={locked}
              value={form.recordNumber}
              onChange={(event) => setForm({...form, recordNumber: event.target.value})}
            />
          </label>
          <label>
            Datum rođenja
            <input
              disabled={locked}
              type="date"
              value={form.dateOfBirth}
              onChange={(event) => setForm({...form, dateOfBirth: event.target.value})}
            />
          </label>
          <label>
            JMBG
            <input
              disabled={locked}
              value={form.nationalId}
              onChange={(event) => setForm({...form, nationalId: event.target.value})}
            />
          </label>
          <label>
            Telefon
            <input
              disabled={locked}
              value={form.phone}
              onChange={(event) => setForm({...form, phone: event.target.value})}
            />
          </label>
          <label className="full-width">
            Adresa
            <input
              disabled={locked}
              value={form.address}
              onChange={(event) => setForm({...form, address: event.target.value})}
            />
          </label>
          <label className="full-width">
            Napomena
            <textarea
              disabled={locked}
              rows={3}
              value={form.note}
              onChange={(event) => setForm({...form, note: event.target.value})}
            />
          </label>
        </div>
        {error && <p className="form-error">{error}</p>}
        <div className="modal-actions">
          <button className="secondary-button" type="button" onClick={onClose}>
            Odustani
          </button>
          {!locked && (
            <button className="primary-button" type="button" onClick={() => void save()}>
              Sačuvaj izmjene
            </button>
          )}
        </div>
      </section>
    </div>
  )
}

function ExaminationDialog({
  examination,
  locked,
  onLocked,
  onUpdated,
  onClose
}: {
  examination: ExaminationRecord
  locked: boolean
  onLocked: (lockedAt: string) => void
  onUpdated: (examination: ExaminationRecord) => void
  onClose: () => void
}) {
  const [message, setMessage] = useState('')
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    diagnosis: examination.diagnosis ?? '',
    findings: examination.findings ?? '',
    recommendation: examination.recommendation ?? ''
  })
  const [therapyItems, setTherapyItems] = useState(
    () =>
      examination.therapy?.items.map((item) => ({
        id: item.id,
        medicineName: item.medicineName,
        dosage: item.dosage ?? '',
        administrationRoute: item.administrationRoute ?? '',
        duration: item.duration ?? '',
        note: item.note ?? ''
      })) ?? []
  )
  async function savePdf() {
    try {
      const result = await window.clinic.reports.pdf(examination.id)
      if (result.saved) setMessage('PDF je sačuvan.')
    } catch {
      setMessage('PDF nije moguće sačuvati.')
    }
  }
  async function previewReport() {
    try {
      await window.clinic.reports.preview(examination.id)
    } catch {
      setMessage('Pregled nalaza nije moguće otvoriti.')
    }
  }
  async function printReport() {
    try {
      const result = await window.clinic.reports.print(examination.id)
      if (result.printed && result.lockedAt) {
        onLocked(result.lockedAt)
        setMessage('Nalaz je poslan na štampu. Karton je zaključan.')
      }
    } catch {
      setMessage('Štampanje nije uspjelo.')
    }
  }
  async function saveEdit() {
    if (therapyItems.some((item) => !item.medicineName.trim())) {
      setMessage('Svaki lijek mora imati naziv.')
      return
    }
    try {
      const updated = await window.clinic.examinations.update({
        id: examination.id,
        diagnosis: form.diagnosis,
        findings: form.findings,
        recommendation: form.recommendation,
        therapyItems
      })
      onUpdated(updated)
      setEditing(false)
      setMessage('Nalaz je izmijenjen.')
    } catch {
      setMessage('Nalaz nije moguće izmijeniti. Karton je možda zaključan.')
    }
  }
  const updateTherapy = (
    id: string,
    field: 'medicineName' | 'dosage' | 'administrationRoute' | 'duration' | 'note',
    value: string
  ) => setTherapyItems(therapyItems.map((item) => (item.id === id ? {...item, [field]: value} : item)))
  return (
    <div className="modal-backdrop">
      <section className="modal panel examination-dialog">
        <div className="dialog-heading">
          <div>
            <p className="eyebrow">NALAZ</p>
            <h2>
              {formatDate(examination.examinationAt)} · {examination.department.name}
            </h2>
          </div>
          <button className="icon-button" type="button" aria-label="Zatvori nalaz" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="dialog-doctor">Doktor: {examination.doctorName}</p>
        {editing ? (
          <div className="examination-fields dialog-edit-fields">
            <label>
              Dijagnoza
              <input value={form.diagnosis} onChange={(event) => setForm({...form, diagnosis: event.target.value})} />
            </label>
            <label>
              Nalaz
              <textarea
                rows={6}
                value={form.findings}
                onChange={(event) => setForm({...form, findings: event.target.value})}
              />
            </label>
            <label>
              Preporuka
              <textarea
                rows={4}
                value={form.recommendation}
                onChange={(event) => setForm({...form, recommendation: event.target.value})}
              />
            </label>
            <div className="dialog-therapy-editor">
              <div className="dialog-therapy-heading">
                <div>
                  <strong>Terapija</strong>
                  <span>Dodajte ili izmijenite lijekove</span>
                </div>
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() =>
                    setTherapyItems([
                      ...therapyItems,
                      {
                        id: crypto.randomUUID(),
                        medicineName: '',
                        dosage: '',
                        administrationRoute: '',
                        duration: '',
                        note: ''
                      }
                    ])
                  }
                >
                  Dodaj lijek
                </button>
              </div>
              {therapyItems.length === 0 && <p className="therapy-empty">Nema dodanih lijekova.</p>}
              {therapyItems.map((item, index) => (
                <div className="dialog-therapy-row" key={item.id}>
                  <span className="therapy-number">{index + 1}</span>
                  <div className="dialog-therapy-fields">
                    <input
                      aria-label="Naziv lijeka"
                      placeholder="Naziv lijeka"
                      value={item.medicineName}
                      onChange={(event) => updateTherapy(item.id, 'medicineName', event.target.value)}
                    />
                    <input
                      aria-label="Doziranje"
                      placeholder="Doziranje"
                      value={item.dosage}
                      onChange={(event) => updateTherapy(item.id, 'dosage', event.target.value)}
                    />
                    <input
                      aria-label="Način primjene"
                      placeholder="Način primjene"
                      value={item.administrationRoute}
                      onChange={(event) => updateTherapy(item.id, 'administrationRoute', event.target.value)}
                    />
                    <input
                      aria-label="Trajanje"
                      placeholder="Trajanje"
                      value={item.duration}
                      onChange={(event) => updateTherapy(item.id, 'duration', event.target.value)}
                    />
                    <input
                      aria-label="Napomena terapije"
                      placeholder="Napomena"
                      value={item.note}
                      onChange={(event) => updateTherapy(item.id, 'note', event.target.value)}
                    />
                  </div>
                  <button
                    className="icon-button"
                    type="button"
                    aria-label="Ukloni lijek"
                    onClick={() => setTherapyItems(therapyItems.filter((current) => current.id !== item.id))}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="dialog-section">
              <strong>Dijagnoza</strong>
              <p>{examination.diagnosis || 'Nije unesena'}</p>
            </div>
            <div className="dialog-section">
              <strong>Nalaz</strong>
              <p>{examination.findings || 'Nije unesen'}</p>
            </div>
            <div className="dialog-section">
              <strong>Preporuka</strong>
              <p>{examination.recommendation || 'Nije unesena'}</p>
            </div>
          </>
        )}
        {examination.therapy && examination.therapy.items.length > 0 && (
          <div className="dialog-section">
            <strong>Terapija</strong>
            {examination.therapy.items.map((item) => (
              <p key={item.id}>
                {item.medicineName} {item.dosage && `· ${item.dosage}`}{' '}
                {item.administrationRoute && `· ${item.administrationRoute}`} {item.duration && `· ${item.duration}`}
                {item.note && <span className="therapy-note"> · {item.note}</span>}
              </p>
            ))}
          </div>
        )}
        <div className="report-actions">
          {!locked && !editing && (
            <button className="secondary-button" type="button" onClick={() => setEditing(true)}>
              Uredi nalaz
            </button>
          )}
          {editing && (
            <>
              <button className="secondary-button" type="button" onClick={() => setEditing(false)}>
                Odustani
              </button>
              <button className="primary-button" type="button" onClick={() => void saveEdit()}>
                Sačuvaj nalaz
              </button>
            </>
          )}
          <button className="secondary-button" type="button" onClick={() => void previewReport()}>
            Pregled
          </button>
          <button className="secondary-button" type="button" onClick={() => void savePdf()}>
            PDF
          </button>
          <button className="primary-button" type="button" onClick={() => void printReport()}>
            Štampaj
          </button>
        </div>
        {message && <p className="save-message">{message}</p>}
        <div className="modal-actions">
          <button className="secondary-button" type="button" onClick={onClose}>
            Zatvori
          </button>
        </div>
      </section>
    </div>
  )
}
