import path from 'path'
import { BrowserWindow } from 'electron'

export default function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'build/main/preload/preload.js'),
    },
  })

  if (process.env.NODE_ENV === 'dev') {
    win.loadURL(`http://localhost:${process.env.VITE_PORT || 8712}`)
  } else {
    win.loadFile('build/renderer/index.html')
  }
}
