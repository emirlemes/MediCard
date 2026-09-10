import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('clinic', {
	version: '0.1.0',
	app: {
		quit: () => ipcRenderer.invoke('app:quit'),
	},
	departments: {
		list: () => ipcRenderer.invoke('departments:list'),
		create: (input: { name: string }) => ipcRenderer.invoke('departments:create', input),
		update: (input: { id: string; name: string }) => ipcRenderer.invoke('departments:update', input),
		setActive: (input: { id: string; active: boolean }) => ipcRenderer.invoke('departments:set-active', input),
	},
	settings: {
		get: () => ipcRenderer.invoke('settings:get'),
		update: (input: { clinicName: string; address: string; phone: string; email: string; doctorName: string; departmentId?: string }) => ipcRenderer.invoke('settings:update', input),
	},
	patients: {
		list: (search?: string) => ipcRenderer.invoke('patients:list', search),
		create: (input: { firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => ipcRenderer.invoke('patients:create', input),
		update: (input: { id: string; firstName: string; lastName: string; recordNumber: string; phone?: string; dateOfBirth?: string; nationalId?: string; address?: string; note?: string }) => ipcRenderer.invoke('patients:update', input),
		get: (id: string) => ipcRenderer.invoke('patients:get', id),
		exportCsv: (patients: PatientRecord[]) => ipcRenderer.invoke('patients:export-csv', patients),
	},
		examinations: {
		create: (input: { patientId: string; departmentId: string; examinationAt: string; doctorName: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => ipcRenderer.invoke('examinations:create', input),
		update: (input: { id: string; diagnosis?: string; findings?: string; recommendation?: string; therapyItems?: { medicineName: string; dosage?: string; administrationRoute?: string; duration?: string; note?: string }[] }) => ipcRenderer.invoke('examinations:update', input),
		exportCsv: (input: { patientName: string; recordNumber: string; examinations: ExaminationRecord[] }) => ipcRenderer.invoke('examinations:export-csv', input),
	},
	reports: {
		pdf: (report: ReportInput) => ipcRenderer.invoke('reports:pdf', report),
		print: (report: ReportInput) => ipcRenderer.invoke('reports:print', report),
	},
	backup: {
		create: () => ipcRenderer.invoke('backup:create'),
		restore: () => ipcRenderer.invoke('backup:restore'),
	},
	dashboard: { summary: () => ipcRenderer.invoke('dashboard:summary') },
})