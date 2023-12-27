import createMainWindow from './windows/mainWindow.js'
import { app, BrowserWindow } from 'electron'
import dotenv from 'dotenv'

dotenv.config()

// might want to have a key bind to restart the app when changes are made ! (no hot reloading for electron)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

if (process.env.NODE_ENV === 'dev') {
  console.log('Launching in DEV mode')
}

app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})
