import fs from 'fs-extra'
import { program } from 'commander'
import ora from 'ora'
import prompts from 'prompts'
import {
  genToday,
  genExtra
} from './today.mjs'

import {
  getSummary,
  getAllQuestions,
} from './api.mjs'

program
  .command('generate')
  .alias('g')
  .description('生成题目文件')
  .option('-T --today', '今天题目', true)
  .option('-E --extra <questionId>', '具体题目, 提供题目编号', '')
  .action(async ({ today, extra }) => {
    let { exist, next, fileName } = today ? await genToday() : await genExtra(extra)
    if (exist) {
      const { go } = await prompts({
        type: 'confirm',
        name: 'go',
        message: `文件 ${fileName} 已经存在, 是否覆盖?`,
        initial: false
      })
      if (go) {
        await next()
      }
    } else {
      await next()
    }
  })

program
  .command('update-progress')
  .alias('u')
  .description('生产README文件进度信息')
  .action(() => {
    const {
      genDescription,
      genHeader,
      genRow,
      genSummary
    } = require('./generator')
    ora('生成README中...').start()
    Promise.all([getAllQuestions(), getSummary()]).then(res => {
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
        ora('生成成功!').succeed()
      })
    })
  })

// 通过LeetCode的Cookie中的session token 来登录，并写入当前文件夹内的缓存文件夹中
program
  .command('login')
  .description('Session登录')
  .argument('<session>', 'LeetCode Cookie中的LEETCODE_SESSION')
  .action((session) => {
    try {
      fs.writeFileSync('../.temp/session', session)
      ora('登录成功!').succeed()
    } catch(e) {
      throw new Error('Error:', e)
    }
  })

program
  .command('t')
  .action(async () => {
    const session = JSON.parse(fs.readFileSync('.temp/session.json', 'utf-8'))
    console.log(session)
  })

program.parseAsync()
