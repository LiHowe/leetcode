import ora from 'ora'
import { getQuestionDetail, getQuestions, getTodayQuestion } from '../service/api.mjs'
import fs from 'fs-extra'
import path from 'path'
import { escapeString } from './utils.mjs'
import { getQuestionList } from '../service/index.mjs'

export async function genQuestionFile(question) {
  const {
    questionFrontendId,
    questionId,
    titleSlug,
    translatedTitle,
    topicTags
  } = question
  const fileName = `.${path.sep}leetcode${path.sep}${questionFrontendId}.${translatedTitle}.js`

  return {
    next: async () => {
      const o = ora().start('生成中...')
      const detail = await getQuestionDetail(titleSlug)
      const { 
        translatedContent,
        codeSnippets = [],
        categoryTitle,
        exampleTestcases,
        likes,
        difficulty,
        questionFrontendId,
        sampleTestCase,
        stats,
        title,
        translatedTitle,
        topicTags,
        metaData,
      } = detail
      const targetSnippet = codeSnippets.find(s => s.langSlug === 'javascript')
      const statsObj = JSON.parse(stats)
      // const { name: fnName, params } = JSON.parse(metaData)
      const template = `
/*
序号: ${questionFrontendId}
名称: ${translatedTitle} | ${title}
难度: ${difficulty}
标签: ${topicTags ? topicTags.map(i => i.translatedName).join(' | ') : '无'}
链接: https://leetcode-cn.com/problems/${titleSlug}
题解: https://leetcode-cn.com/problems/${titleSlug}/solution/

| 通过数量 | 总提交数 | 通过率 |
| ${statsObj.totalAccepted} | ${statsObj.totalSubmission} | ${statsObj.acRate} |

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
      fs.writeFileSync(fileName, template, { encoding: 'utf-8' })
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
