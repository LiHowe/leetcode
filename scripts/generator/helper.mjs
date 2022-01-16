import { getAllQuestions } from '../service/api.mjs'
import { QuestionStatus } from './utils.mjs'

/**
 * questionFrontendId: '1',
 translatedTitle: '两数之和',
 questionId: '1',
 __typename: 'QuestionNode',
 difficulty: 'Easy',
 title: 'Two Sum',
 categoryTitle: 'Algorithms',
 titleSlug: 'two-sum',
 isPaidOnly: false,
 status: 'ac'
 */
function genRow (arr = [], statusArr = []) {
  return arr.map((q, i) => {
    const { questionId, titleSlug, difficulty } = q
    const status = statusArr[i].status
    const state = status === QuestionStatus.AC
      ? '✅'
      : status === QuestionStatus.TRIED
        ? '🆖'
        : '🕐'
    const diff = difficulty === 'Easy'
      ? '🤩'
      : difficulty === 'Medium'
        ? '🤔'
        : '🤯'
    return `| ${questionId} | ${titleSlug} | ${diff} ${difficulty} | ${state} |`
  }).join('\n')
}

function genHeader () {
  return (
    `
## Progress

| 序号 | 名称 | 难度 | 状态 |
| --- | --- | --- | --- |`
  )
}

function genSummary(summary) {
  const {
    numAcceptedQuestions: p,
    numFailedQuestions: f,
    numUntouchedQuestions: n,
  } = summary
  return `
## Summary

| 简单 | 中等 | 困难 |
| --- | ---  | --- |
| ${p[0].count}/**${f[0].count + n[0].count}** | ${p[1].count}/**${f[1].count + n[1].count}** | ${p[2].count}/**${f[2].count + n[2].count}** |
  `
}

function genDescription() {
  return `
# LeetCode 

My LeetCode Repo.
  `
}

// TODO: 类似github的提交率
function genDashboard () {

}


async function genProgress(force = false) {
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


export {
  genDescription,
  genSummary,
  genRow,
  genHeader,
  genProgress,
}
