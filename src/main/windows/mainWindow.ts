import path from 'path'
import { BrowserWindow } from 'electron'

export default function createMainWindow() {
  console.log('path.resolve()', path.resolve())
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(path.resolve(), 'src/renderer/preload.js')
    }
  })

  console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'dev') {
    // Load production build
    win.loadFile(path.join(path.resolve(), 'src/renderer/index.html'))
  } else {
    // Load vite dev server page 
    console.log('Development mode')
    win.loadURL('http://localhost:8712/')
  }
}
