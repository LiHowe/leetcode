import { getQuestions } from './api.mjs'
import { QuestionType } from '../generator/utils.mjs'

export async function getPassedQuestions (
  start = 0,
  end = 100,
  arr = []
) {
  arr = arr || []
  let res
  do {
    const param = { start, end, filters: { status: QuestionType.AC }}
    res = await getQuestions(param)
    arr.push(...res.questions)
    start = end
    end += 100
  } while (res.hasMore)
  return arr
}
