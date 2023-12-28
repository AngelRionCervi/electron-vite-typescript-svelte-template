import path from 'path'
import { BrowserWindow, app } from 'electron'
import { getPreloadDirPath } from '@/tools/helpers'

export default function createMainWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: getPreloadDirPath('preload.js')
    },
  })

  if (process.env.NODE_ENV === 'dev') {
    win.loadURL(`http://localhost:${process.env.VITE_PORT || 8712}`)
  } else {
    win.loadFile(path.resolve(app.getAppPath(), 'build/renderer/index.html'))
  }
}
