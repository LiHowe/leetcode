
import fs from 'fs-extra'

let temp = null

export function getSession(key) {
  let fileContent = ''
  try {
    fileContent = fs.readFileSync('.temp/session.json', 'utf-8')
  } catch (e) {
    console.error('Session File Not Exist!')
  }
  const res = temp || (temp = JSON.parse(fileContent))
  return key ? res[key] : res
}