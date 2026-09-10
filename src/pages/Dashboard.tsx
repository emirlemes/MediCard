import {ArrowUpRight, CalendarDays, ClipboardList, Plus, Stethoscope, Users} from 'lucide-react'
import {Heading} from '../components/Heading'
import {formatDate, initials} from '../utils/formatters'

type Page = 'dashboard' | 'patients' | 'examination' | 'settings'

export function Dashboard({
  onNavigate,
  summary,
  activeDepartmentName
}: {
  onNavigate: (page: Page) => void
  summary: DashboardSummary
  activeDepartmentName: string
}) {
  const today = new Intl.DateTimeFormat('bs-BA', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date())
  return (
    <>
      <Heading
        eyebrow={today.toLocaleUpperCase('bs-BA')}
        title="Dobro došli u kliniku"
        subtitle="Pregled rada i najnovijih aktivnosti."
        action={
          <button className="primary-button" type="button" onClick={() => onNavigate('examination')}>
            <Plus size={17} /> Novi pregled
          </button>
        }
      />
      <section className="stat-grid">
        <StatCard
          label="Ukupno pacijenata"
          value={String(summary.patients)}
          change="Podaci iz lokalne baze"
          icon={<Users size={19} />}
        />
        <StatCard
          label="Ukupno pregleda"
          value={String(summary.examinations)}
          change="Podaci iz lokalne baze"
          icon={<CalendarDays size={19} />}
        />
        <StatCard
          label="Aktivni odjel"
          value={activeDepartmentName}
          change="Trenutna postavka"
          icon={<Stethoscope size={19} />}
          accent
        />
      </section>
      <div className="dashboard-grid">
        <section className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">NEDAVNO</p>
              <h2>Posljednji pacijenti</h2>
            </div>
            <button className="text-button" type="button" onClick={() => onNavigate('patients')}>
              Svi pacijenti <ArrowUpRight size={15} />
            </button>
          </div>
          <div className="patient-list">
            {summary.recentPatients.map((patient) => (
              <div className="patient-row" key={patient.id}>
                <div className="patient-avatar">{initials(`${patient.firstName} ${patient.lastName}`)}</div>
                <div>
                  <strong>
                    {patient.firstName} {patient.lastName}
                  </strong>
                  <span>Karton {patient.recordNumber}</span>
                </div>
                <time>{formatDate(patient.updatedAt)}</time>
                <ArrowUpRight size={15} className="row-arrow" />
              </div>
            ))}
          </div>
        </section>
        <section className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">PREGLEDI</p>
              <h2>Posljednji pregledi</h2>
            </div>
            <button className="text-button" type="button" onClick={() => onNavigate('patients')}>
              Kartoni <ArrowUpRight size={15} />
            </button>
          </div>
          <div className="patient-list">
            {summary.recentExaminations.map((examination) => (
              <div className="patient-row" key={examination.id}>
                <div className="patient-avatar">
                  <ClipboardList size={16} />
                </div>
                <div>
                  <strong>
                    {examination.patient.firstName} {examination.patient.lastName}
                  </strong>
                  <span>
                    {examination.diagnosis || 'Pregled bez dijagnoze'} · {examination.department.name} ·{' '}
                    {examination.doctorName}
                  </span>
                </div>
                <time>{formatDate(examination.examinationAt)}</time>
              </div>
            ))}
          </div>
        </section>
        <section className="panel quick-panel">
          <p className="eyebrow">BRZE RADNJE</p>
          <h2>Šta želite uraditi?</h2>
          <QuickAction
            icon={<Users size={18} />}
            title="Otvorite pacijente"
            detail="Pretražite kartone i historiju"
            onClick={() => onNavigate('patients')}
          />
          <QuickAction
            icon={<ClipboardList size={18} />}
            title="Unesite pregled"
            detail="Dodajte nalaz i terapiju"
            onClick={() => onNavigate('examination')}
          />
        </section>
      </div>
    </>
  )
}

function StatCard({
  label,
  value,
  change,
  icon,
  accent = false
}: {
  label: string
  value: string
  change: string
  icon: React.ReactNode
  accent?: boolean
}) {
  return (
    <div className={`stat-card ${accent ? 'accent' : ''}`}>
      <div className="stat-icon">{icon}</div>
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{change}</span>
    </div>
  )
}
function QuickAction({
  icon,
  title,
  detail,
  onClick
}: {
  icon: React.ReactNode
  title: string
  detail: string
  onClick: () => void
}) {
  return (
    <button type="button" className="quick-action" onClick={onClick}>
      {icon}
      <span>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
      <ArrowUpRight size={16} />
    </button>
  )
}
