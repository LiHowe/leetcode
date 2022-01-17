import { genExact, genRootFile, genToday } from './generator/index.mjs'
import fs from 'fs-extra'
import ora from 'ora'
import prompts from 'prompts'
import { getTempFilePath, TempFiles } from './generator/utils.mjs'

export function handleUpdateProgress () {
  genRootFile()
}

export function handleSessionLogin (session) {
  try {
    const res = {
      sessionId: session
    }
    const tempPath = getTempFilePath(TempFiles.Session)
    const exist = fs.existsSync(tempPath)
    !exist && fs.mkdirSync(getTempFilePath())
    fs.writeFileSync(getTempFilePath(TempFiles.Session), JSON.stringify(res, null, 2))
    ora('登录成功!').succeed()
  } catch(e) {
    throw new Error(e)
  }
}


export async function handleGenerate({
  today,
  exact,
  all,
  force
}) {
  if (all) {
    await handleGenerateAllQuestion()
  } else {
    let { exist, next, fileName } = today
      ? await genToday(force)
      : await genExact(exact, force)
    if (!force && exist) {
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
  }
}

// TODO: 生成全部题目文件
async function handleGenerateAllQuestion() {
  // const o = ora().start('生成中...')
  // const { skipped, succeed, failed } = await genAll(force)
  // o.end(`生成完成! 成功: ${succeed}, 失败: ${failed}, 跳过: ${skipped}`)
}
