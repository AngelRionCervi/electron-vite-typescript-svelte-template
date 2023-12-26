import createMainWindow from './windows/mainWindow.js'
import { app, BrowserWindow } from 'electron'

// might want to have a key bind to restart the app when changes are made ! (no hot reloading for electron)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
  createMainWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow()
    }
  })
})
