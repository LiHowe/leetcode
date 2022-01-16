import { program } from 'commander'
import {
  handleGenerate,
  handleSessionLogin,
  handleUpdateProgress,
} from './handler.mjs'
import { getPassedQuestions } from './service/index.mjs'

program
  .command('generate')
  .alias('g')
  .description('生成题目文件')
  .option('-T --today', '今天题目', true)
  .option('-E --exact <questionId>', '具体题目, 提供题目编号', '')
  .option('-A --all', '生成全部题目')
  .option('--force', '覆盖已有文件')
  .action(handleGenerate)

program
  .command('update-progress')
  .alias('u')
  .description('生成README文件进度信息')
  .action(handleUpdateProgress)

// 通过LeetCode的Cookie中的session token 来登录，并写入当前文件夹内的缓存文件夹中
program
  .command('login')
  .description('Session登录')
  .argument('<session>', 'LeetCode-CN Cookie中的LEETCODE_SESSION')
  .action(handleSessionLogin)

program
  .command('test')
  .action(async () => {
    const arr = await getPassedQuestions()
    console.log(arr)
  })

program.parseAsync()

{

}
