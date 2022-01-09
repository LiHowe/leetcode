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
function genRow (arr = []) {
  return arr.map(q => {
    const { questionId, titleSlug, difficulty, status } = q
    const state = status === 'ac'
    ? '✅'
    : status === 'notac'
      ? '🆖'
      : '🕐'
    const diff = difficulty === 'Easy'
    ? '🌟'
    : difficulty === 'Medium'
      ? '⭐️'
      : '💫'
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

export {
  genDescription,
  genSummary,
  genRow,
  genHeader
}
