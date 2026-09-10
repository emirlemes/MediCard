import { useState } from "react";
import { ArrowUpRight, Plus, Search, Users } from "lucide-react";
import { Heading } from "../components/Heading";
import { formatDate, initials } from "../utils/formatters";

export function Patients({
  patients,
  onPatientsChange,
  onOpenPatient,
}: {
  patients: PatientRecord[];
  onPatientsChange: (patients: PatientRecord[]) => void;
  onOpenPatient: (id: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    recordNumber: "",
    dateOfBirth: "",
    nationalId: "",
    address: "",
    phone: "",
    note: "",
  });
  const visiblePatients = patients.filter((patient) => {
    const haystack = [
      patient.firstName,
      patient.lastName,
      patient.recordNumber,
      patient.nationalId,
      patient.phone,
      patient.address,
      patient.note,
      patient.dateOfBirth
        ? new Date(patient.dateOfBirth).toLocaleDateString("bs-BA")
        : "",
    ]
      .join(" ")
      .toLowerCase();
    return (
      haystack.includes(search.toLowerCase()) &&
      (!birthDate || patient.dateOfBirth?.slice(0, 10) === birthDate)
    );
  });
  async function createPatient() {
    setError("");
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.recordNumber.trim()
    ) {
      setError("Ime, prezime i broj kartona su obavezni.");
      return;
    }
    try {
      const created = await window.clinic.patients.create(form);
      onPatientsChange([created, ...patients]);
      setForm({
        firstName: "",
        lastName: "",
        recordNumber: "",
        dateOfBirth: "",
        nationalId: "",
        address: "",
        phone: "",
        note: "",
      });
      setShowForm(false);
    } catch {
      setError(
        "Pacijent nije sačuvan. Provjerite da broj kartona nije duplikat.",
      );
    }
  }
  async function exportPatients() {
    const result = await window.clinic.patients.exportCsv(visiblePatients);
    if (result.saved)
      setNotice(`Izvezeno pacijenata: ${visiblePatients.length}.`);
  }
  return (
    <>
      <Heading
        eyebrow="EVIDENCIJA"
        title="Pacijenti"
        subtitle="Svi kartoni na jednom mjestu."
        action={
          <div className="heading-actions">
            <button
              className="secondary-button"
              type="button"
              onClick={() => void exportPatients()}
            >
              Izvoz CSV
            </button>
            <button
              className="primary-button"
              type="button"
              onClick={() => setShowForm(true)}
            >
              <Plus size={17} /> Novi pacijent
            </button>
          </div>
        }
      />
      <section className="panel table-panel">
        <div className="table-toolbar">
          <div className="search-box">
            <Search size={17} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ime, JMBG, telefon, karton..."
            />
          </div>
          <label className="date-filter">
            Datum rođenja
            <input
              type="date"
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
            />
          </label>
          <span className="result-count">
            {visiblePatients.length} pacijenata
          </span>
          {notice && <span className="save-message">{notice}</span>}
        </div>
        {visiblePatients.length === 0 ? (
          <div className="empty-form">
            <Users size={30} />
            <h2>Nema pacijenata</h2>
            <p>Dodajte prvog pacijenta u lokalnu bazu.</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Pacijent</th>
                <th>Broj kartona</th>
                <th>Datum rođenja</th>
                <th>Telefon</th>
                <th>Promijenjeno</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {visiblePatients.map((patient) => (
                <tr
                  key={patient.id}
                  tabIndex={0}
                  role="button"
                  onClick={() => onOpenPatient(patient.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onOpenPatient(patient.id);
                    }
                  }}
                >
                  <td>
                    <div className="table-patient">
                      <span className="patient-avatar">
                        {initials(`${patient.firstName} ${patient.lastName}`)}
                      </span>
                      <strong>
                        {patient.firstName} {patient.lastName}
                      </strong>
                    </div>
                  </td>
                  <td>{patient.recordNumber}</td>
                  <td>
                    {patient.dateOfBirth
                      ? formatDate(patient.dateOfBirth)
                      : "-"}
                  </td>
                  <td>{patient.phone || "-"}</td>
                  <td>{formatDate(patient.updatedAt)}</td>
                  <td>
                    <button
                      className="icon-button"
                      type="button"
                      aria-label="Otvori pacijenta"
                      onClick={(event) => {
                        event.stopPropagation();
                        onOpenPatient(patient.id);
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      {showForm && (
        <div className="modal-backdrop">
          <section className="modal panel">
            <h2>Novi pacijent</h2>
            <p>Podaci se čuvaju lokalno u SQLite bazi.</p>
            <div className="form-grid">
              <label>
                Ime
                <input
                  value={form.firstName}
                  onChange={(event) =>
                    setForm({ ...form, firstName: event.target.value })
                  }
                />
              </label>
              <label>
                Prezime
                <input
                  value={form.lastName}
                  onChange={(event) =>
                    setForm({ ...form, lastName: event.target.value })
                  }
                />
              </label>
              <label>
                Broj kartona
                <input
                  value={form.recordNumber}
                  onChange={(event) =>
                    setForm({ ...form, recordNumber: event.target.value })
                  }
                />
              </label>
              <label>
                Datum rođenja
                <input
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(event) =>
                    setForm({ ...form, dateOfBirth: event.target.value })
                  }
                />
              </label>
              <label>
                JMBG
                <input
                  value={form.nationalId}
                  onChange={(event) =>
                    setForm({ ...form, nationalId: event.target.value })
                  }
                />
              </label>
              <label>
                Adresa
                <input
                  value={form.address}
                  onChange={(event) =>
                    setForm({ ...form, address: event.target.value })
                  }
                />
              </label>
              <label>
                Telefon
                <input
                  value={form.phone}
                  onChange={(event) =>
                    setForm({ ...form, phone: event.target.value })
                  }
                />
              </label>
              <label className="form-grid-wide">
                Napomena
                <textarea
                  rows={3}
                  value={form.note}
                  onChange={(event) =>
                    setForm({ ...form, note: event.target.value })
                  }
                />
              </label>
            </div>
            {error && <p className="form-error">{error}</p>}
            <div className="modal-actions">
              <button
                className="secondary-button"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Odustani
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={() => void createPatient()}
              >
                Sačuvaj pacijenta
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
