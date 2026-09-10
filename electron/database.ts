import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '../prisma/generated/client/client'
import BetterSqlite3 from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

let prisma: PrismaClient | null = null

const requiredTables = [
  'Department',
  'Patient',
  'ClinicSettings',
  'Examination',
  'Therapy',
  'TherapyItem',
]

type SqliteDatabase = InstanceType<typeof BetterSqlite3>
export type DatabaseClient = PrismaClient

function hasColumn(sqlite: SqliteDatabase, table: string, column: string) {
  const columns = sqlite.prepare(`PRAGMA table_info(${table})`).all() as { name: string }[]
  return columns.some((item) => item.name === column)
}

function runMigrations(sqlite: SqliteDatabase) {
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS _Migrations (
      id INTEGER PRIMARY KEY NOT NULL,
      appliedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `)

  const migrations: { id: number; apply: () => void }[] = [
    {
      id: 1,
      apply: () => {
        if (!hasColumn(sqlite, 'Patient', 'lockedAt')) {
          sqlite.exec('ALTER TABLE Patient ADD COLUMN lockedAt DATETIME')
        }
        sqlite.exec(`
          CREATE INDEX IF NOT EXISTS Patient_examinations_idx
            ON Examination(patientId, examinationAt);
          CREATE INDEX IF NOT EXISTS Department_examinations_idx
            ON Examination(departmentId, examinationAt);
          CREATE INDEX IF NOT EXISTS TherapyItem_therapy_idx
            ON TherapyItem(therapyId);
        `)
      },
    },
  ]

  const hasMigration = sqlite.prepare('SELECT 1 FROM _Migrations WHERE id = ?').pluck()
  const recordMigration = sqlite.prepare('INSERT INTO _Migrations (id) VALUES (?)')
  for (const migration of migrations) {
    if (hasMigration.get(migration.id)) continue
    const applyMigration = sqlite.transaction(() => {
      migration.apply()
      recordMigration.run(migration.id)
    })
    applyMigration()
  }
}

function assertHealthySqliteFile(databasePath: string, readonly = true) {
  const sqlite = new BetterSqlite3(databasePath, { readonly, fileMustExist: true, timeout: 5000 })
  try {
    const integrity = sqlite.prepare('PRAGMA integrity_check').get() as { integrity_check?: string }
    if (integrity.integrity_check !== 'ok') throw new Error('SQLite integrity check nije prošao.')
    const tables = sqlite.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all() as { name: string }[]
    const tableNames = new Set(tables.map((table) => table.name))
    const missingTable = requiredTables.find((table) => !tableNames.has(table))
    if (missingTable) throw new Error(`Backup ne sadrži tabelu ${missingTable}.`)
  } finally {
    sqlite.close()
  }
}

export async function createDatabaseBackup(databasePath: string, backupPath: string) {
  const sqlite = new BetterSqlite3(databasePath, { timeout: 5000 })
  try {
    // Merge WAL pages into the main file before copying so the backup is self-contained.
    sqlite.pragma('wal_checkpoint(TRUNCATE)')
  } finally {
    sqlite.close()
  }
  await fs.promises.copyFile(databasePath, backupPath)
  assertHealthySqliteFile(backupPath)
}

export function validateDatabaseBackup(backupPath: string) {
  assertHealthySqliteFile(backupPath)
}

export function getDatabase(databasePath: string) {
  if (prisma) return prisma

  fs.mkdirSync(path.dirname(databasePath), { recursive: true })
  const sqlite = new BetterSqlite3(databasePath, { timeout: 5000 })
  sqlite.exec(`
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS Department (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      active INTEGER NOT NULL DEFAULT 1,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS Patient (
      id TEXT PRIMARY KEY NOT NULL,
      recordNumber TEXT NOT NULL UNIQUE,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      dateOfBirth DATETIME,
      nationalId TEXT,
      address TEXT,
      phone TEXT,
      note TEXT,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS ClinicSettings (
      id INTEGER PRIMARY KEY NOT NULL DEFAULT 1,
      clinicName TEXT NOT NULL DEFAULT '',
      address TEXT NOT NULL DEFAULT '',
      phone TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '',
      doctorName TEXT NOT NULL DEFAULT '',
      departmentId TEXT,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS Examination (
      id TEXT PRIMARY KEY NOT NULL,
      patientId TEXT NOT NULL,
      departmentId TEXT NOT NULL,
      examinationAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      doctorName TEXT NOT NULL,
      diagnosis TEXT,
      findings TEXT,
      recommendation TEXT,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (patientId) REFERENCES Patient(id) ON DELETE CASCADE,
      FOREIGN KEY (departmentId) REFERENCES Department(id) ON DELETE RESTRICT
    );
    CREATE TABLE IF NOT EXISTS Therapy (
      id TEXT PRIMARY KEY NOT NULL,
      examinationId TEXT NOT NULL UNIQUE,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (examinationId) REFERENCES Examination(id) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS TherapyItem (
      id TEXT PRIMARY KEY NOT NULL,
      therapyId TEXT NOT NULL,
      medicineName TEXT NOT NULL,
      dosage TEXT,
      administrationRoute TEXT,
      duration TEXT,
      note TEXT,
      createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (therapyId) REFERENCES Therapy(id) ON DELETE CASCADE
    );
  `)
  runMigrations(sqlite)
  sqlite.close()
  const adapter = new PrismaBetterSqlite3({ url: databasePath })
  prisma = new PrismaClient({ adapter })
  return prisma
}

export async function seedDatabase(databasePath: string) {
  const database = getDatabase(databasePath)
  for (const name of ['Urologija', 'Opća medicina']) {
    const existing = await database.department.findFirst({ where: { name } })
    if (!existing) await database.department.create({ data: { name } })
  }
  const settings = await database.clinicSettings.findUnique({ where: { id: 1 } })
  if (!settings) {
    const firstDepartment = await database.department.findFirst({ where: { active: true }, orderBy: { name: 'asc' } })
    await database.clinicSettings.create({ data: { id: 1, clinicName: 'Poliklinika Šabanović', departmentId: firstDepartment?.id } })
  } else if (!settings.departmentId || !settings.clinicName) {
    const firstDepartment = await database.department.findFirst({ where: { active: true }, orderBy: { name: 'asc' } })
    await database.clinicSettings.update({ where: { id: 1 }, data: { departmentId: settings.departmentId ?? firstDepartment?.id, clinicName: settings.clinicName || 'Poliklinika Šabanović' } })
  }
}

export async function closeDatabase() {
  if (prisma) {
    await prisma.$disconnect()
    prisma = null
  }
}
