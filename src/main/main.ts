import createMainWindow from './windows/mainWindow.js'
import { app, BrowserWindow, globalShortcut } from 'electron'
import dotenv from 'dotenv'
import { spawn } from 'child_process'
import { isDev } from '@/tools/helpers.js'

dotenv.config()

if (process.env.NODE_ENV === 'dev') {
  console.log('Launching in DEV mode')
}

app.whenReady().then(() => {
  createMainWindow()

  if (isDev()) {
    globalShortcut.register('CommandOrControl+R', () => {
      app.exit()
      spawn(process.argv.shift() || '', process.argv, {
        cwd: process.cwd(),
        detached: process.platform !== 'darwin',
        stdio: 'inherit',
      })
    })
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
