import {useEffect, useState} from 'react'
import {Activity, ChevronDown, ClipboardList, LayoutDashboard, LogOut, Menu, Settings, Users} from 'lucide-react'
import {Dashboard} from './pages/Dashboard'
import {Patients as PatientsPage} from './pages/Patients'
import {NewExamination as ExaminationPage} from './pages/Examination'
import {BackupPanel, SettingsPage as SettingsScreen} from './pages/Settings'
import {PatientDetailPage} from './pages/PatientDetail'
import {initials} from './utils/formatters'
import './App.css'

type Page = 'dashboard' | 'patients' | 'examination' | 'settings'
type Icon = typeof LayoutDashboard

const navigation: {id: Page; label: string; icon: Icon}[] = [
  {id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard},
  {id: 'patients', label: 'Pacijenti', icon: Users},
  {id: 'examination', label: 'Novi pregled', icon: ClipboardList},
  {id: 'settings', label: 'Postavke', icon: Settings}
]

function App() {
  const [page, setPage] = useState<Page>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [patients, setPatients] = useState<PatientRecord[]>([])
  const [summary, setSummary] = useState<DashboardSummary>({
    patients: 0,
    examinations: 0,
    recentPatients: [],
    recentExaminations: []
  })
  const [departments, setDepartments] = useState<DepartmentRecord[]>([])
  const [settings, setSettings] = useState<ClinicSettingsRecord | null>(null)
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null)
  const [newExaminationPatientId, setNewExaminationPatientId] = useState<string | undefined>()
  const [startupError, setStartupError] = useState<string | null>(null)
  const pageTitle = navigation.find((item) => item.id === page)?.label ?? 'Dashboard'

  useEffect(() => {
    if (!window.clinic) {
      setStartupError(
        'Aplikacija mora biti pokrenuta kroz Electron desktop aplikaciju. Ne otvarajte Vite adresu direktno u browseru.'
      )
      return
    }
    void Promise.all([
      window.clinic.patients.list(),
      window.clinic.dashboard.summary(),
      window.clinic.departments.list(),
      window.clinic.settings.get()
    ])
      .then(([patientList, dashboardSummary, departmentList, clinicSettings]) => {
        setPatients(patientList)
        setSummary(dashboardSummary)
        setDepartments(departmentList)
        setSettings(clinicSettings)
      })
      .catch(() => setStartupError('Podaci aplikacije nisu dostupni. Ponovo pokrenite desktop aplikaciju.'))
  }, [])

  if (startupError) {
    return (
      <main className="startup-error">
        <section className="panel">
          <p className="eyebrow">POLIKLINIKA ŠABANOVIĆ</p>
          <h1>Poliklinika Šabanović nije pokrenuta u Electronu</h1>
          <p>{startupError}</p>
          <code>npm run dev</code>
        </section>
      </main>
    )
  }

  const activeDepartmentName =
    departments.find((department) => department.id === settings?.departmentId)?.name ?? 'Nije odabran'
  function navigate(nextPage: Page) {
    setPage(nextPage)
    setSidebarOpen(false)
  }
  function openPatient(id: string) {
    setSelectedPatientId(id)
    setPage('patients')
  }
  function startExamination(patientId?: string) {
    setNewExaminationPatientId(patientId)
    setPage('examination')
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="brand-block">
          <div className="brand-mark">
            <Activity size={20} />
          </div>
          <div>
            <p className="brand-name">POLIKLINIKA</p>
            <p className="brand-caption">ŠABANOVIĆ · evidencija pacijenata</p>
          </div>
        </div>
        <div className="department-switcher">
          <span>AKTIVNI ODJEL</span>
          <button type="button">
            <strong>{activeDepartmentName}</strong>
            <ChevronDown size={16} />
          </button>
        </div>
        <nav className="main-nav" aria-label="Glavna navigacija">
          <p className="nav-label">RADNI PROSTOR</p>
          {navigation.map(({id, label, icon: Icon}) => (
            <button
              key={id}
              type="button"
              className={`nav-item ${page === id ? 'active' : ''}`}
              onClick={() => navigate(id)}
            >
              <Icon size={18} />
              <span>{label}</span>
              {id === 'patients' && <span className="nav-count">{summary.patients}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="offline-status">
            <span className="status-dot" /> Offline spremno
          </div>
          <p>Podaci se čuvaju lokalno</p>
          <button
            type="button"
            className="exit-button mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-red-200/40 bg-red-500/15 px-4 py-3 text-base font-bold text-red-100 transition-colors hover:bg-red-500/30 focus-visible:outline-4 focus-visible:outline-red-300/40"
            onClick={() => void window.clinic.app.quit()}
          >
            <LogOut size={19} /> Izlaz iz aplikacije
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <button
            className="menu-button"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Otvori meni"
          >
            <Menu size={20} />
          </button>
          <div className="breadcrumb">
            <span>Poliklinika Šabanović</span>
            <span>/</span>
            <strong>{pageTitle}</strong>
          </div>
          <div className="topbar-actions">
            <div className="doctor-chip">
              <span className="avatar">{initials(settings?.doctorName || 'Doktor')}</span>
              <span>{settings?.doctorName || 'Doktor nije podešen'}</span>
            </div>
          </div>
        </header>
        <div className="page-content">
          {page === 'dashboard' && (
            <Dashboard onNavigate={navigate} summary={summary} activeDepartmentName={activeDepartmentName} />
          )}
          {page === 'patients' &&
            (selectedPatientId ? (
              <PatientDetailPage
                patientId={selectedPatientId}
                settings={settings}
                onBack={() => setSelectedPatientId(null)}
                onNewExamination={() => startExamination(selectedPatientId)}
              />
            ) : (
              <PatientsPage patients={patients} onPatientsChange={setPatients} onOpenPatient={openPatient} />
            ))}
          {page === 'examination' && (
            <ExaminationPage
              patients={patients}
              departments={departments}
              settings={settings}
              initialPatientId={newExaminationPatientId}
              onCancel={() => {
                setPage(newExaminationPatientId ? 'patients' : 'dashboard')
                setSelectedPatientId(newExaminationPatientId ?? null)
                setNewExaminationPatientId(undefined)
              }}
              onSaved={() => {
                setPage('patients')
                setSelectedPatientId(newExaminationPatientId ?? null)
                setNewExaminationPatientId(undefined)
              }}
            />
          )}
          {page === 'settings' && (
            <>
              <SettingsScreen
                departments={departments}
                settings={settings}
                onDepartmentsChange={setDepartments}
                onSettingsChange={setSettings}
              />
              <BackupPanel />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
