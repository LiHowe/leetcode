import path from 'path'
import fs from 'fs-extra'

export const QuestionType = {
  AC: 'AC',
  TRIED: 'TRIED',
  NOT_STARTED: 'NOT_STARTED'
}

export const QuestionStatus = {
  AC: 'ac',
  TRIED: 'notac',
  NOT_STARTED: null
}

const htmlEscapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
  '≤': '&le;',
  '≥': '&ge;',
  ' ': '&nbsp;'
};
const htmlEscapeReverseMap = Object.keys(htmlEscapeMap).reduce((init, c)=> {
  init[htmlEscapeMap[c]] = c
  return init
}, {})
const htmlEscapeRegexp = /&(amp|lt|gt|apos|quot|le|ge|nbsp);/g;

String.prototype.escapeString = escapeString

export function escapeString (str) {
  return str.replace(htmlEscapeRegexp, char => htmlEscapeReverseMap[char])
}

export function getTempFilePath(fileName) {
  return path.resolve(process.cwd(), '.temp/', fileName)
}

export function getRootPath(...args) {
  return path.resolve(process.cwd(), ...args)
}

export const TempFiles = {
  Session: 'session.json',
  Question: 'question.json'
}

export function writeTempFile(fileName, fileContent) {
  const filePath = getTempFilePath(fileName)
  if (!filePath) return
  if (!fs.existsSync(filePath)) {
    fs.createFileSync(filePath)
  }
  try {
    fs.writeFileSync(filePath, fileContent)
    return filePath
  } catch (e) {
    return ''
  }
}
