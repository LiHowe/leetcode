import {
  getTodayQuestion,
  getQuestionDetail,
  getQuestions,
} from './api.mjs'
import ora from 'ora'
import fs from 'fs-extra'
import path from 'path'

export async function genToday() {
  const arr = await getTodayQuestion()
  const {
    question,
    userStatus,
    lastSubmission
  } = arr[0]
  return await genQuestionFile(question)
}

/**
 * 生成具体题目
 * @param {String} titleOrId 题目标题或ID
 */
export async function genExtra(id) {
  if (!id) {
    ora('请提供题目ID!').fail()
    return
  }
  const questionResult = await getQuestions({ filter: { searchKeywords: titleOrId } })
  const target = questionResult.find(q => q.frontendQuestionId == titleOrId)
  if (!target) {
    ora.error(`${titleOrId} 未找到!`)
    return Promise.reject(`${titleOrId} 未找到!`)
  }
  return await genQuestionFile(target)
}

export async function genQuestionFile(question) {
  const {
    titleSlug,
    questionId,
    frontendQuestionId,
    titleCn
  } = question
  const fileName = `.${path.sep}leetcode${path.sep}${frontendQuestionId}.${titleCn}.js`

  return {
    next: async () => {
      const o = ora().start('Generating...')
      const detail = await getQuestionDetail(titleSlug)
      const { translatedContent, codeSnippets } = detail
      const targetSnippet = codeSnippets.find(s => s.langSlug === 'javascript')
      const template = `
    /*
    ${translatedContent.replaceAll(/\<\/?\w+\>/g, '')}
    */
    const { test } = require('./utils')
    ${targetSnippet.code}
      `.trim()
      fs.writeFileSync(fileName, template)
      o.succeed(`文件 ${fileName} 生成成功!`)
    },
    exist: fs.existsSync(fileName),
    fileName
  }
  
}
