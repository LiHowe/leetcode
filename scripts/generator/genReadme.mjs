import ora from 'ora'
import { getAllQuestions, getAllQuestionStatus, getSummary } from '../service/api.mjs'
import { genDescription, genHeader, genRow, genSummary } from './helper.mjs'
import fs from 'fs-extra'
import { getRootPath, getTempFilePath, TempFiles, writeTempFile } from './utils.mjs'

export function genRootFile () {
  const state = ora().start('生成README中...')
  Promise.all([getQuestionList(), getAllQuestionStatus(), getSummary()]).then(res => {
    const [questions, questionStatus, summary] = res
    const str = `
    ${genDescription()}
    ${genSummary(summary)}
    ${genHeader()}\n${genRow(questions, questionStatus)}
        `.trim()

    fs.writeFile(getRootPath('README.md'), str, err => {
      if (err) {
        console.error(err)
      }
      state.succeed('生成成功!')
    })
  })
}

async function getQuestionList() {
  const cache = getQuestionCache()
  if (cache && cache.length) return cache
  const res = await getAllQuestions()
  // cache question data
  writeTempFile(TempFiles.Question, JSON.stringify(res))
  return res
}

function getQuestionCache() {
  const filePath = getTempFilePath(TempFiles.Question)
  const exist = fs.existsSync(filePath)
  if (!exist) return []
  const fileContent = fs.readFileSync(filePath) || '[]'
  return JSON.parse(fileContent)
}
