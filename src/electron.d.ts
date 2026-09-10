declare global {
  type DepartmentRecord = { id: string; name: string; active: boolean }
  type ClinicSettingsRecord = { id: number; clinicName: string; address: string; phone: string; email: string; doctorName: string; departmentId: string | null }

  type PatientRecord = {
    id: string
    recordNumber: string
    firstName: string
    lastName: string
    dateOfBirth: string | null
    lockedAt: string | null
    phone: string | null
    nationalId: string | null
    address: string | null
    note: string | null
    updatedAt: string
  }

  type TherapyItemRecord = { id: string; medicineName: string; dosage: string | null; administrationRoute: string | null; duration: string | null; note: string | null }
  type ExaminationRecord = { id: string; examinationAt: string; doctorName: string; diagnosis: string | null; findings: string | null; recommendation: string | null; department: DepartmentRecord; therapy: { items: TherapyItemRecord[] } | null }
  type PatientDetail = PatientRecord & { address: string | null; nationalId: string | null; note: string | null; examinations: ExaminationRecord[] }
  type ReportInput = { patient: { id: string; firstName: string; lastName: string; recordNumber: string; dateOfBirth: string | null; nationalId: string | null; phone: string | null; address: string | null }; examination: ExaminationRecord; settings: ClinicSettingsRecord | null }

  type DashboardExamination = { id: string; examinationAt: string; doctorName: string; diagnosis: string | null; patient: PatientRecord; department: DepartmentRecord }
  type DashboardSummary = {
    patients: number
    examinations: number
    recentPatients: PatientRecord[]
    recentExaminations: DashboardExamination[]
  }

  interface Window {
    clinic: {
      app: {
        quit: () => Promise<{ closed: boolean }>
      }
      departments: {
        list: () => Promise<DepartmentRecord[]>
        create: (input: { name: string }) => Promise<DepartmentRecord>
        update: (input: { id: string; name: string }) => Promise<DepartmentRecord>
        setActive: (input: { id: string; active: boolean }) => Promise<DepartmentRecord>
      }
      settings: {
        get: () => Promise<ClinicSettingsRecord | null>
        update: (input: { clinicName: string; address: string; phone: string; email: string; doctorName: string; departmentId?: string }) => Promise<ClinicSettingsRecord>
      }
      patients: {
        list: (search?: string) => Promise<PatientRecord[]>
        create: (input: { firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => Promise<PatientRecord>
        update: (input: { id: string; firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => Promise<PatientRecord>
        get: (id: string) => Promise<PatientDetail | null>
        exportCsv: (patients: PatientRecord[]) => Promise<{ saved: boolean; filePath?: string }>
      }
      examinations: {
        create: (input: { patientId: string; departmentId: string; examinationAt: string; doctorName: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => Promise<ExaminationRecord>
        update: (input: { id: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems?: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => Promise<ExaminationRecord>
        exportCsv: (input: { patientName: string; recordNumber: string; examinations: ExaminationRecord[] }) => Promise<{ saved: boolean; filePath?: string }>
      }
      reports: {
        pdf: (report: ReportInput) => Promise<{ saved: boolean; filePath?: string }>
        print: (report: ReportInput) => Promise<{ printed: boolean; reason?: string; lockedAt?: string }>
      }
      backup: {
        create: () => Promise<{ saved: boolean; filePath?: string }>
        restore: () => Promise<{ restored: boolean }>
      }
      dashboard: { summary: () => Promise<DashboardSummary> }
    }
  }
}

export {}