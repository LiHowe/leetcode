import { getAllQuestions, getQuestions } from './api.mjs'
import fs from 'fs-extra'
import { writeToTemp, TEMP_FILE_MAPPING, getTemp } from '../temp.mjs'
import { QUESTION_STATUS } from '../variables.mjs'

export async function getQuestionList() {
  const cache = getTemp(TEMP_FILE_MAPPING.Question)
  if (cache && cache.length) return cache
  const res = await getAllQuestions()
  // cache question data
  writeToTemp(TEMP_FILE_MAPPING.Question, JSON.stringify(res))
  return res
}

export async function getPassedQuestions () {
  const questions = await getQuestionList()
  return questions.filter(q => q.status === QUESTION_STATUS.AC)
}

export async function getNotStartedQuestions (filter) {
  const questions = await getQuestionList()
  return questions.filter(q => q.status === QUESTION_STATUS.NOT_STARTED && filter(q))
}
