import { useState } from "react";
import { Plus, Stethoscope, Users } from "lucide-react";
import { Heading } from "../components/Heading";

export function SettingsPage({ departments, settings, onDepartmentsChange, onSettingsChange }: { departments: DepartmentRecord[]; settings: ClinicSettingsRecord | null; onDepartmentsChange: (departments: DepartmentRecord[]) => void; onSettingsChange: (settings: ClinicSettingsRecord) => void }) {
  const [newDepartment, setNewDepartment] = useState("");
  const [editingDepartmentId, setEditingDepartmentId] = useState<string | null>(null);
  const [editingDepartmentName, setEditingDepartmentName] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [clinicForm, setClinicForm] = useState({ clinicName: settings?.clinicName ?? "", address: settings?.address ?? "", phone: settings?.phone ?? "", email: settings?.email ?? "", doctorName: settings?.doctorName ?? "", departmentId: settings?.departmentId ?? undefined });
  const [message, setMessage] = useState("");

  async function addDepartment() {
    if (!newDepartment.trim()) return;
    try {
      const department = await window.clinic.departments.create({ name: newDepartment });
      onDepartmentsChange([...departments, department].sort((left, right) => left.name.localeCompare(right.name)));
      setNewDepartment("");
      setDepartmentError("");
    } catch (error) { setDepartmentError(error instanceof Error ? error.message : "Odjel nije moguće dodati."); }
  }

  async function toggleDepartment(department: DepartmentRecord) {
    if (department.active && department.id === settings?.departmentId) { setDepartmentError("Ne možete deaktivirati trenutno aktivni odjel."); return; }
    try {
      const updated = await window.clinic.departments.setActive({ id: department.id, active: !department.active });
      onDepartmentsChange(departments.map((item) => item.id === updated.id ? updated : item));
      setDepartmentError("");
    } catch (error) { setDepartmentError(error instanceof Error ? error.message : "Status odjela nije moguće promijeniti."); }
  }

  async function renameDepartment() {
    if (!editingDepartmentId || !editingDepartmentName.trim()) return;
    try {
      const updated = await window.clinic.departments.update({ id: editingDepartmentId, name: editingDepartmentName });
      onDepartmentsChange(departments.map((item) => item.id === updated.id ? updated : item).sort((left, right) => left.name.localeCompare(right.name)));
      setEditingDepartmentId(null);
      setDepartmentError("");
    } catch (error) { setDepartmentError(error instanceof Error ? error.message : "Odjel nije moguće urediti."); }
  }

  async function saveClinic() {
    try {
      const updated = await window.clinic.settings.update(clinicForm);
      onSettingsChange(updated);
      setMessage("Postavke su sačuvane.");
      window.setTimeout(() => setMessage(""), 2500);
    } catch { setMessage("Postavke nije moguće sačuvati."); }
  }

  return <>
    <Heading eyebrow="KONFIGURACIJA" title="Postavke" subtitle="Podaci klinike i postavke aplikacije." />
    <div className="settings-layout">
      <section className="panel settings-card"><div className="settings-card-heading"><div className="section-icon"><Stethoscope size={19} /></div><div><h2>Klinika i doktor</h2><p>Podaci koji će se prikazivati na nalazu.</p></div></div><div className="settings-form"><label>Naziv klinike<input value={clinicForm.clinicName} onChange={(event) => setClinicForm({ ...clinicForm, clinicName: event.target.value })} /></label><label>Doktor<input value={clinicForm.doctorName} onChange={(event) => setClinicForm({ ...clinicForm, doctorName: event.target.value })} /></label><label>Adresa<input value={clinicForm.address} onChange={(event) => setClinicForm({ ...clinicForm, address: event.target.value })} /></label><label>Telefon<input value={clinicForm.phone} onChange={(event) => setClinicForm({ ...clinicForm, phone: event.target.value })} /></label><label>Email<input value={clinicForm.email} onChange={(event) => setClinicForm({ ...clinicForm, email: event.target.value })} /></label></div><div className="settings-card-footer"><button className="primary-button" type="button" onClick={() => void saveClinic()}>Sačuvaj postavke</button>{message && <span className="save-message">{message}</span>}</div></section>
      <section className="panel settings-card"><div className="settings-card-heading"><div className="section-icon"><Users size={19} /></div><div><h2>Odjeli</h2><p>Odjeli su zajednički za ovu lokalnu instalaciju.</p></div></div><label className="settings-label">Trenutni odjel<select value={clinicForm.departmentId ?? ""} onChange={(event) => setClinicForm({ ...clinicForm, departmentId: event.target.value || undefined })}><option value="">Odaberite odjel</option>{departments.filter((department) => department.active).map((department) => <option value={department.id} key={department.id}>{department.name}</option>)}</select></label><div className="department-list">{departments.map((department) => <div className="department-row" key={department.id}><span className={department.active ? "department-active" : "department-inactive"} /><strong>{department.name}</strong>{editingDepartmentId === department.id ? <><input className="department-edit-input" value={editingDepartmentName} onChange={(event) => setEditingDepartmentName(event.target.value)} aria-label="Novi naziv odjela" /><button className="text-button" type="button" onClick={() => void renameDepartment()}>Sačuvaj</button></> : <button className="text-button" type="button" onClick={() => { setEditingDepartmentId(department.id); setEditingDepartmentName(department.name); }}>Uredi</button>}<button className="text-button" type="button" onClick={() => void toggleDepartment(department)}>{department.active ? "Deaktiviraj" : "Aktiviraj"}</button></div>)}</div>{departmentError && <p className="form-error">{departmentError}</p>}<div className="add-department"><input value={newDepartment} onChange={(event) => setNewDepartment(event.target.value)} placeholder="Novi odjel" /><button className="secondary-button" type="button" onClick={() => void addDepartment()}><Plus size={15} /> Dodaj</button></div></section>
    </div>
  </>;
}

export function BackupPanel() {
  const [message, setMessage] = useState("");
  async function createBackup() { try { const result = await window.clinic.backup.create(); if (result.saved) setMessage("Backup je sačuvan."); } catch { setMessage("Backup nije moguće napraviti."); } }
  async function restoreBackup() { if (!window.confirm("Vraćanje backupa će zamijeniti trenutne podatke i ponovo pokrenuti aplikaciju. Nastaviti?")) return; try { const result = await window.clinic.backup.restore(); if (result.restored) setMessage("Backup je vraćen. Aplikacija se ponovo pokreće."); } catch { setMessage("Backup nije moguće vratiti."); } }
  return <section className="panel backup-panel"><div><p className="eyebrow">SIGURNOST PODATAKA</p><h2>Backup baze</h2><p>Sačuvajte kompletnu lokalnu SQLite bazu ili vratite raniju kopiju.</p></div><div className="backup-actions"><button className="secondary-button" type="button" onClick={() => void createBackup()}>Napravi backup</button><button className="secondary-button" type="button" onClick={() => void restoreBackup()}>Vrati backup</button></div>{message && <span className="save-message">{message}</span>}</section>;
}
