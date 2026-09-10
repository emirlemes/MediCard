Želim da napraviš potpuno novu desktop aplikaciju za kliniku.

## 1. CILJ APLIKACIJE

Aplikacija služi za jednostavno vođenje evidencije:

- pacijenata
- pregleda
- nalaza
- dijagnoza
- terapija
- historije pacijenta
- štampanja nalaza
- backup-a baze

Aplikacija mora biti **offline-first** i osnovni rad ne smije zavisiti od interneta.

Ovo nije veliki bolnički informacioni sistem. Želim jednostavnu, preglednu i pouzdanu desktop aplikaciju.

---

# 2. TEHNOLOGIJE

Koristi:

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- SQLite
- Prisma ORM

Ciljna platforma je prvenstveno Windows.

Na kraju aplikacija treba moći biti buildana kao Windows `.exe`.

Nemoj koristiti:

- PostgreSQL
- MySQL
- Redis
- Docker
- cloud backend
- online API
- server koji je potreban za rad aplikacije

SQLite treba biti lokalna baza.

---

# 3. ODJELI – VAŽNO

Aplikacija treba biti napravljena tako da **nije vezana za samo jedan odjel**.

Trenutno postoje:

- Urologija
- Opća medicina

Ali kasnije može biti potrebno dodati:

- Kardiologija
- Ginekologija
- Interna medicina
- itd.

Zato napravi sistem odjela kao zaseban entitet u bazi.

Tabela:

Department

- id
- name
- active
- createdAt
- updatedAt

Korisnik kroz Postavke može:

- vidjeti odjele
- dodati novi odjel
- urediti naziv odjela
- aktivirati/deaktivirati odjel

Primjer:

Postavke → Odjeli

Urologija Aktivna
Opća medicina Aktivna
Kardiologija Aktivna

[ + Dodaj odjel ]

Nemoj hardkodirati odjele u kodu.

---

# 4. ODABIR ODJELA

Kada se aplikacija prvi put pokrene, korisnik treba moći podesiti koji odjel koristi ta instalacija aplikacije.

Primjer:

"Odaberite odjel"

[ Urologija ▼ ]

[Sačuvaj]

Nakon toga aplikacija pamti izabrani odjel.

U Postavkama treba uvijek biti moguće promijeniti odjel.

Primjer:

Postavke → Odjel

Trenutni odjel:

[ Urologija ▼ ]

[Sačuvaj]

---

# 5. JEDNA APLIKACIJA

Ne praviti posebne aplikacije:

- Clinic Urologija.exe
- Clinic Opća.exe

Napraviti **jednu aplikaciju**.

Ista aplikacija se može instalirati na više računara, a svaka instalacija može imati podešen drugi odjel.

Primjer:

Računar 1:

Odjel = Urologija

Računar 2:

Odjel = Opća medicina

Ako se kasnije doda novi odjel, ista aplikacija ga može koristiti.

Nemoj praviti kompleksan multi-tenant sistem.

---

# 6. PACIJENTI

Napravi stranicu:

Pacijenti

Funkcionalnosti:

- lista pacijenata
- pretraga pacijenata
- novi pacijent
- otvaranje kartona
- uređivanje pacijenta

Podaci:

- id
- broj kartona
- ime
- prezime
- datum rođenja
- JMBG
- adresa
- telefon
- napomena
- createdAt
- updatedAt

Struktura treba biti dovoljno fleksibilna da kasnije možemo dodati još polja.

---

# 7. KARTON PACIJENTA

Klikom na pacijenta otvara se njegov karton.

Na vrhu prikazati osnovne podatke:

- ime i prezime
- broj kartona
- datum rođenja
- JMBG
- telefon
- adresa

Ispod prikazati:

### Historija pregleda

Najnoviji pregled prvi.

Za svaki pregled:

- datum
- odjel
- doktor
- dijagnoza

Klikom se otvara kompletan pregled/nalaz.

### Historija terapija

Prikazati terapije kroz historiju pacijenta.

---

# 8. NOVI PREGLED

Na kartonu pacijenta treba postojati dugme:

- Novi pregled

Forma:

- datum pregleda
- doktor
- dijagnoza
- nalaz
- preporuka

Pregled mora biti povezan sa:

- pacijentom
- odjelom
- doktorom

---

# 9. TERAPIJA

Uz pregled treba omogućiti unos terapije.

Jedan pregled može imati više lijekova.

Za svaki lijek:

- naziv lijeka
- doziranje
- način primjene
- trajanje
- napomena

Dugme:

- Dodaj lijek

Primjer:

Terapija:

1. Lijek A
   2x dnevno
   7 dana

2. Lijek B
   1x dnevno
   10 dana

---

# 10. HISTORIJA

Pacijent mora imati kompletnu historiju.

Historija treba sadržavati:

- preglede
- nalaze
- dijagnoze
- terapije

Najnoviji podaci trebaju biti na vrhu.

Stari nalaz treba biti moguće otvoriti.

Stari nalaz treba biti moguće ponovo štampati.

---

# 11. NALAZ

Napravi profesionalan A4 dokument.

Nalaz treba sadržavati:

- naziv klinike
- naziv odjela
- adresu
- telefon
- podatke pacijenta
- broj kartona
- datum pregleda
- doktora
- dijagnozu
- nalaz
- terapiju
- preporuku

Na kraju:

Doktor

---

Podaci klinike i doktora ne smiju biti hardkodirani.

---

# 12. PDF I ŠTAMPANJE

Omogućiti:

- pregled nalaza prije štampanja
- generisanje PDF-a
- direktno štampanje preko sistemskog printera

PDF treba biti A4 format.

Nalaz treba izgledati profesionalno i biti spreman za štampu.

---

# 13. POSTAVKE

Napravi stranicu:

Postavke

Sa sekcijama:

### Klinika

- naziv
- adresa
- telefon
- email

### Doktor

- ime i prezime

### Odjel

- trenutni odjel
- promjena odjela

### Odjeli

- lista odjela
- dodavanje
- uređivanje
- aktiviranje/deaktiviranje

### Backup

- napravi backup
- vrati backup
- lokacija backupa

---

# 14. SQLITE BAZA

Koristi SQLite + Prisma.

Minimalni modeli:

Department
Patient
Examination
Therapy
TherapyItem
ClinicSettings

Relacije:

Department
→ ima više Examination

Patient
→ ima više Examination

Examination
→ pripada jednom Patient
→ pripada jednom Department
→ može imati Therapy

Therapy
→ pripada jednom Examination
→ ima više TherapyItem

Koristi odgovarajuće foreign key relacije.

Nemoj praviti nepotrebno veliki broj tabela.

Dodaj createdAt i updatedAt gdje imaju smisla.

---

# 15. BACKUP

Backup treba biti vrlo jednostavan.

Aplikacija treba imati:

[ Napravi backup ]

i

[ Vrati backup ]

Backup treba sadržavati kompletnu SQLite bazu.

Primjer:

clinic-backup-2026-09-09.db

Kasnije želim dodati automatsko kopiranje u OneDrive.

Za sada napravi backup servis tako da ga kasnije možemo lako proširiti.

Osnovni rad aplikacije ne smije zavisiti od interneta.

---

# 16. OFFLINE RAD

Ovo je obavezno.

Bez interneta mora raditi:

- otvaranje aplikacije
- pacijenti
- pretraga
- unos pacijenta
- pregledi
- nalazi
- terapije
- historija
- PDF
- štampanje
- lokalni backup
- restore

Internet eventualno koristimo samo za budući OneDrive backup.

---

# 17. DASHBOARD

Napravi jednostavan dashboard.

Prikazati:

- ukupan broj pacijenata
- ukupan broj pregleda
- posljednje pacijente
- posljednje preglede
- trenutni odjel

Nemoj praviti nepotrebne grafikone.

---

# 18. UI / UX

Aplikacija treba izgledati moderno, profesionalno i jednostavno.

Koristi:

- React
- Tailwind CSS
- sidebar
- jasne forme
- pregledne tabele
- modale gdje imaju smisla
- potvrdu prije brisanja
- success/error poruke
- loading state
- empty state

Glavni meni:

Dashboard
Pacijenti
Novi pregled
Postavke

Na vrhu aplikacije jasno prikazati trenutni odjel.

Primjer:

KLINIKA

Odjel: Urologija

---

# 19. ELECTRON SIGURNOST

Koristi ispravnu Electron arhitekturu:

- contextIsolation: true
- nodeIntegration: false
- preload
- contextBridge
- IPC komunikacija

React renderer ne smije imati direktan pristup Node.js filesystem API-ju.

Database operacije i filesystem operacije trebaju biti u sigurnom Electron/main sloju.

Nemoj koristiti:

nodeIntegration=true

---

# 20. STRUKTURA PROJEKTA

Organizuj projekat modularno.

Primjer:

src/
main/
database/
services/
backup/
print/

preload/

renderer/
components/
pages/
layouts/
hooks/
services/
types/

prisma/
schema.prisma

data/

Nemoj stavljati svu logiku u jednu datoteku ili jednu React komponentu.

---

# 21. RAZVOJNI PRINCIP

Radi kao senior desktop/full-stack developer.

Prije implementacije:

1. analiziraj zahtjeve
2. predloži arhitekturu
3. predloži strukturu foldera
4. predloži Prisma schema
5. provjeri da li je nešto nepotrebno komplikovano

Nakon toga implementiraj funkcionalnu aplikaciju.

Nemoj napraviti samo UI/mockup.

Želim stvarne funkcionalnosti:

- SQLite
- CRUD pacijenata
- CRUD pregleda
- terapije
- historiju
- PDF
- print
- backup
- restore
- upravljanje odjelima
- podešavanje trenutnog odjela

---

# 22. VAŽNO – JEDNOSTAVNOST

Nemoj dodavati funkcionalnosti koje nisam tražio.

Ne praviti:

- online backend
- cloud bazu
- komplikovanu autentifikaciju
- multi-tenant arhitekturu
- nepotrebne API-je
- server
- PostgreSQL
- Redis
- Docker

Ako postoji izbor između komplikovanog i jednostavnog rješenja, izaberi jednostavno.

Aplikacija treba biti:

**brza, jednostavna, offline i pouzdana.**

Konačni osnovni tok je:

PACIJENT
↓
NOVI PREGLED
↓
DIJAGNOZA + NALAZ
↓
TERAPIJA
↓
SAČUVAJ
↓
PDF / PRINT
↓
HISTORIJA

Uz mogućnost da se kroz Postavke odabere i upravlja odjelima.

Počni od arhitekture i Prisma schema, a zatim napravi kompletnu funkcionalnu aplikaciju.
