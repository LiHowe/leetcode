import ora from 'ora'
import { getAllQuestions, getAllQuestionStatus, getSummary } from '../service/api.mjs'
import { genDescription, genHeader, genRow, genSummary } from './helper.mjs'
import fs from 'fs-extra'
import path from 'path'
import { getRootPath } from './utils.mjs'

export function genRootFile () {
  const state = ora().start('生成README中...')
  Promise.all([getAllQuestions(), getAllQuestionStatus(), getSummary()]).then(res => {
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
