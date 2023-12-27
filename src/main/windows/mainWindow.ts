import path from 'path'
import { BrowserWindow } from 'electron'

export default function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(path.resolve(), 'src/main/preload/preload.js'),
    },
  })

  if (process.env.NODE_ENV === 'dev') {
    console.log('Launching in DEV mode')
    win.loadURL('http://localhost:8712/')
  } else {
    win.loadFile(path.join(path.resolve(), 'src/renderer/index.html'))
  }
}
