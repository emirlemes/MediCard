import { app, BrowserWindow, dialog } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { getDatabase, seedDatabase } from './database'
import { registerIpc } from './ipc'

let mainWindow: BrowserWindow | null = null
let activeDatabasePath: string | null = null
let closingAfterBackup = false
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

function createWindow() {
  const runtimeIcon = process.platform === 'win32'
    ? path.join(currentDirectory, '../assets/icons/windows/icon.ico')
    : process.platform === 'linux'
      ? path.join(currentDirectory, '../assets/icons/linux/icons/512x512.png')
      : undefined
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 920,
    title: 'MediCard',
    ...(runtimeIcon ? { icon: runtimeIcon } : {}),
    minWidth: 1080,
    minHeight: 700,
    backgroundColor: '#f4f7f6',
    webPreferences: {
      preload: path.join(currentDirectory, 'preload.mjs'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    void mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    void mainWindow.loadFile(path.join(currentDirectory, '../dist/index.html'))
  }
}

app.whenReady().then(async () => {
  const databasePath = path.join(app.getPath('userData'), 'clinic.db')
  activeDatabasePath = databasePath
  const database = getDatabase(databasePath)
  await seedDatabase(databasePath)
  registerIpc(database, databasePath)
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).catch((error: unknown) => {
  const message = error instanceof Error ? `${error.name}: ${error.message}\n\n${error.stack ?? ''}` : String(error)
  console.error('Clinic startup failed:', message)
  void fs.writeFile(path.join(app.getPath('userData'), 'startup-error.log'), message, 'utf8').catch(() => undefined)
  if (app.isReady()) dialog.showErrorBox('MediCard se nije pokrenuo', message)
  app.quit()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('before-quit', (event) => {
  if (closingAfterBackup || !activeDatabasePath) return
  event.preventDefault()
  closingAfterBackup = true
  void (async () => {
    try {
      await fs.mkdir(path.join(app.getPath('userData'), 'backups'), { recursive: true })
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      await fs.copyFile(activeDatabasePath!, path.join(app.getPath('userData'), 'backups', `clinic-auto-${timestamp}.db`))
    } catch (error) {
      console.error('Automatic backup failed:', error)
    } finally {
      app.quit()
    }
  })()
})