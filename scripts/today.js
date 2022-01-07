const { API } = require('./api')
const fs = require('fs')
const path = require('path')

API.getTodayQuestion().then(arr => {
  const {
    question,
    userStatus,
    lastSubmission
  } = arr[0]
  const {
    titleSlug,
    questionId,
    frontendQuestionId,
    titleCn
  } = question
  const fileName = `.${path.sep}leetcode${path.sep}${questionId}.${titleCn}.js`
  API.getQuestionDetail(titleSlug).then(detail => {
    const { translatedContent, codeSnippets } = detail
    const targetSnippet = codeSnippets.find(s => s.langSlug === 'javascript')
    const template = `
/*
${translatedContent.replaceAll(/\<\/?\w+\>/g, '')}
*/
const { test } = require('./util')
${targetSnippet.code}
    `.trim()
    fs.writeFileSync(fileName, template)
  })
})