import ora from 'ora'
import { getQuestionDetail, getQuestions, getTodayQuestion } from '../service/api.mjs'
import fs from 'fs-extra'

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

/**
 * 生成具体题目
 * @param {String} id 题目ID
 */
export async function genExact(id) {
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

export async function genToday(force = false) {
  const arr = await getTodayQuestion()
  const {
    question,
    userStatus,
    lastSubmission
  } = arr[0]
  return await genQuestionFile(question)
}
