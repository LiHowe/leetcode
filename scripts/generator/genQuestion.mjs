import ora from 'ora'
import { getQuestionDetail, getQuestions, getTodayQuestion } from '../service/api.mjs'
import fs from 'fs-extra'
import path from 'path'
import { escapeString } from './utils.mjs'
import { getQuestionList } from '../service/index.mjs'

export async function genQuestionFile(question) {
  const {
    titleSlug,
    questionId,
    frontendQuestionId,
    questionFrontendId,
    titleCn,
    title,
    translatedTitle,
    difficulty,
    categoryTitle,
    topicTags
  } = question
  const fileName = `.${path.sep}leetcode${path.sep}${frontendQuestionId ?? questionFrontendId}.${titleCn ?? translatedTitle}.js`

  return {
    next: async () => {
      const o = ora().start('生成中...')
      const detail = await getQuestionDetail(titleSlug)
      const { translatedContent, codeSnippets = [] } = detail
      const targetSnippet = codeSnippets.find(s => s.langSlug === 'javascript')
      const template = `
/*
序号: ${frontendQuestionId}
名称: ${titleCn} | ${titleSlug}
难度: ${difficulty}
标签: ${topicTags ? topicTags.map(i => i.translatedName || i.nameTranslated).join(' | ') : '无'}
链接: https://leetcode-cn.com/problems/${titleSlug}
题解: https://leetcode-cn.com/problems/${titleSlug}/solution/

${escapeString(
  translatedContent
    .replaceAll(/\<\/?\w+\>/g, '')
    .replaceAll('\n \n', '')
  )
}

*/

const { test } = require('./utils')
// lc-start
${targetSnippet.code}
// lc-end
      `.trim()
      fs.writeFileSync(fileName, template)
      o.succeed(`文件 ${fileName} 生成成功!`)
    },
    exist: fs.existsSync(fileName),
    fileName
  }
}

/**
 * 生成具体题目
 * @param {String} id 题目ID
 */
export async function genExact(id) {
  if (!id) {
    ora('请提供题目ID!').fail()
    return
  }
  const questionResult = await getQuestionList()
  const target = questionResult.find(q => q.questionFrontendId === id || q.questionId === id)
  if (!target) {
    ora.error(`${id} 未找到!`)
    return Promise.reject(`${id} 未找到!`)
  }
  return await genQuestionFile(target)
}

export async function genToday() {
  const arr = await getTodayQuestion()
  const {
    question,
    userStatus,
    lastSubmission
  } = arr[0]
  return await genQuestionFile(question)
}
