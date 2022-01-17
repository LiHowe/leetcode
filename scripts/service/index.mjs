import { getAllQuestions, getQuestions } from './api.mjs'
import { getTempFilePath, QuestionStatus, QuestionType, TempFiles, writeTempFile } from '../generator/utils.mjs'
import fs from 'fs-extra'

export async function getQuestionList() {
  const cache = getQuestionCache()
  if (cache && cache.length) return cache
  const res = await getAllQuestions()
  // cache question data
  writeTempFile(TempFiles.Question, JSON.stringify(res))
  return res
}

function getQuestionCache() {
  const filePath = getTempFilePath(TempFiles.Question)
  const exist = fs.existsSync(filePath)
  if (!exist) return []
  const fileContent = fs.readFileSync(filePath) || '[]'
  return JSON.parse(fileContent)
}


export async function getPassedQuestions () {
  const questions = await getQuestionList()
  return questions.filter(q => q.status === QuestionStatus.AC)
}

export async function getNotStartedQuestions (filter) {
  const questions = await getQuestionList()
  return questions.filter(q => q.status === QuestionStatus.NOT_STARTED && filter(q))
}
