import path from 'path'
import { app } from 'electron'

export function isDev() {
  return process.env.NODE_ENV === 'dev'
}

export function getPreloadDirPath(fileName: string) {
  return isDev() ? path.join(process.cwd(), 'build/main/preload', fileName) : path.resolve(app.getAppPath(), 'build/main/preload', fileName)
}
