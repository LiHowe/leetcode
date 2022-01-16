import { resolve } from 'path'
import { getTempFilePath } from './generator/utils.mjs'
import fs from 'fs-extra'

let temp = null

export function getSession(key) {
  if (!temp) {
    let fileContent = ''
    try {
      fileContent = fs.readFileSync(getTempFilePath('session.json'), 'utf-8')
    } catch (e) {
      console.error('\n Session File Not Exist! Please run Login first.')
      process.exit(1)
    }
    temp = JSON.parse(fileContent)
  }
  return key ? temp[key] : temp
}
