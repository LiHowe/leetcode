import {
  getTodayQuestion,
  getQuestionDetail,
  getQuestions,
  getAllQuestions
} from './api.mjs'
import ora from 'ora'
import fs from 'fs-extra'
import path from 'path'

export async function genToday(force = false) {
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

export async function genAll(force = false) {
  const questions = await getAllQuestions()
  let skipped = 0, succeed = 0, failed = 0
  for (let q of questions) {
    try {
      const { next, fileName, exist } = await genQuestionFile(q)
      if (exist && force) {
        await next()
        succeed++
      } else {
        skipped++
      }
    } catch(e) {
      failed++
    }
  }
  return {
    skipped,
    failed,
    succeed
  }
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

export async function genQuestionFile(question) {
  const {
    titleSlug,
    questionId,
    frontendQuestionId,
    titleCn,
    difficulty,
    categoryTitle,
    topicTags
  } = question
  const fileName = `.${path.sep}leetcode${path.sep}${frontendQuestionId}.${titleCn}.js`

  return {
    next: async () => {
      const o = ora().start('生成中...')
      const detail = await getQuestionDetail(titleSlug)
      const { translatedContent, codeSnippets } = detail
      const targetSnippet = codeSnippets.find(s => s.langSlug === 'javascript')
      const template = `
/*
序号: ${frontendQuestionId}
名称: ${titleCn} | ${titleSlug}
难度: ${difficulty}
标签: ${topicTags.map(i => i.translatedName || i.nameTranslated).join(' | ')}
链接: https://leetcode-cn.com/problems/${titleSlug}
题解: https://leetcode-cn.com/problems/${titleSlug}/solution/

${translatedContent
  .replaceAll(/\<\/?\w+\>/g, '')
  .replace(htmlEscapeRegexp, char => htmlEscapeReverseMap[char])
  .replaceAll('\n \n', '')
}

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
