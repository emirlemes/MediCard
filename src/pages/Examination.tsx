import {useState} from 'react'
import {Heading} from '../components/Heading'
import {Plus} from 'lucide-react'

export function NewExamination({
  patients,
  departments,
  settings,
  initialPatientId,
  onSaved,
  onCancel
}: {
  patients: PatientRecord[]
  departments: DepartmentRecord[]
  settings: ClinicSettingsRecord | null
  initialPatientId?: string
  onSaved: () => void
  onCancel: () => void
}) {
  const [form, setForm] = useState({
    patientId: initialPatientId ?? '',
    departmentId: settings?.departmentId ?? '',
    examinationAt: toLocalDateTime(new Date()),
    doctorName: settings?.doctorName ?? '',
    diagnosis: '',
    findings: '',
    recommendation: ''
  })
  const [therapyItems, setTherapyItems] = useState<
    {
      medicineName: string
      dosage: string
      administrationRoute: string
      duration: string
      note: string
    }[]
  >([])
  const [error, setError] = useState('')
  function updateTherapy(index: number, field: keyof (typeof therapyItems)[number], value: string) {
    setTherapyItems(therapyItems.map((item, itemIndex) => (itemIndex === index ? {...item, [field]: value} : item)))
  }
  async function saveExamination() {
    setError('')
    if (!form.patientId || !form.departmentId || !form.doctorName.trim()) {
      setError('Pacijent, odjel i doktor su obavezni.')
      return
    }
    if (therapyItems.some((item) => !item.medicineName.trim())) {
      setError('Svaka terapijska stavka mora imati naziv lijeka.')
      return
    }
    try {
      await window.clinic.examinations.create({...form, therapyItems})
      onSaved()
    } catch {
      setError('Pregled nije sačuvan. Provjerite unesene podatke.')
    }
  }
  return (
    <>
      <Heading eyebrow="RADNI TOK" title="Novi pregled" subtitle="Unesite nalaz i terapiju pacijenta." />
      <section className="panel examination-form">
        <div className="examination-grid">
          <label>
            Pacijent
            <select value={form.patientId} onChange={(event) => setForm({...form, patientId: event.target.value})}>
              <option value="">Odaberite pacijenta</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.firstName} {patient.lastName} - {patient.recordNumber}
                </option>
              ))}
            </select>
          </label>
          <label>
            Odjel
            <select
              value={form.departmentId}
              onChange={(event) => setForm({...form, departmentId: event.target.value})}
            >
              <option value="">Odaberite odjel</option>
              {departments
                .filter((department) => department.active)
                .map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Datum pregleda
            <input
              type="datetime-local"
              value={form.examinationAt}
              onChange={(event) => setForm({...form, examinationAt: event.target.value})}
            />
          </label>
          <label>
            Doktor
            <input
              value={form.doctorName}
              onChange={(event) => setForm({...form, doctorName: event.target.value})}
              placeholder="Ime i prezime doktora"
            />
          </label>
        </div>
        <div className="examination-fields">
          <label>
            Dijagnoza
            <input value={form.diagnosis} onChange={(event) => setForm({...form, diagnosis: event.target.value})} />
          </label>
          <label>
            Nalaz
            <textarea
              rows={5}
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
        </div>
        <div className="therapy-editor">
          <div className="form-section-heading">
            <div>
              <p className="eyebrow">TERAPIJA</p>
              <h2>Lijekovi</h2>
            </div>
            <button
              className="secondary-button"
              type="button"
              onClick={() =>
                setTherapyItems([
                  ...therapyItems,
                  {
                    medicineName: '',
                    dosage: '',
                    administrationRoute: '',
                    duration: '',
                    note: ''
                  }
                ])
              }
            >
              <Plus size={15} /> Dodaj lijek
            </button>
          </div>
          {therapyItems.length === 0 ? (
            <p className="therapy-empty">Nema dodanih lijekova.</p>
          ) : (
            therapyItems.map((item, index) => (
              <div className="therapy-draft" key={index}>
                <div className="therapy-number">{index + 1}</div>
                <div className="therapy-draft-fields">
                  <input
                    value={item.medicineName}
                    onChange={(event) => updateTherapy(index, 'medicineName', event.target.value)}
                    placeholder="Naziv lijeka"
                  />
                  <input
                    value={item.dosage}
                    onChange={(event) => updateTherapy(index, 'dosage', event.target.value)}
                    placeholder="Doziranje"
                  />
                  <input
                    value={item.administrationRoute}
                    onChange={(event) => updateTherapy(index, 'administrationRoute', event.target.value)}
                    placeholder="Način primjene"
                  />
                  <input
                    value={item.duration}
                    onChange={(event) => updateTherapy(index, 'duration', event.target.value)}
                    placeholder="Trajanje"
                  />
                </div>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Ukloni lijek"
                  onClick={() => setTherapyItems(therapyItems.filter((_, itemIndex) => itemIndex !== index))}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
        {error && <p className="form-error">{error}</p>}
        <div className="examination-actions">
          <button className="secondary-button" type="button" onClick={onCancel}>
            Odustani
          </button>
          <button className="primary-button" type="button" onClick={() => void saveExamination()}>
            Sačuvaj pregled
          </button>
        </div>
      </section>
    </>
  )
}

function toLocalDateTime(date: Date) {
  const offset = date.getTimezoneOffset()
  return new Date(date.getTime() - offset * 60 * 1000).toISOString().slice(0, 16)
}
