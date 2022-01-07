const { API } = require('./api')
const fs = require('fs')

const {
  genDescription,
  genHeader,
  genRow,
  genSummary
} = require('./generator')
console.log('生成README中...')
Promise.all([API.getAllQuestions(), API.getSummary()]).then(res => {
  const [questions, summary] = res
  const str = `
${genDescription()}
${genSummary(summary)}
${genHeader()}\n${genRow(questions)}
    `.trim()
  fs.writeFile('./README.md', str, err => {
    if (err) {
      console.error(err)
    }
    console.log('生成成功!')
  })
})