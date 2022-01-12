import axios from 'axios'
import { getSession } from './session.mjs'

let sessionId = ''

// cookie 中 LEETCODE_SESSION
let csrftoken = ''

const request = axios.create({
  baseURL: 'https://leetcode-cn.com/graphql',
  timeout: 10 * 1000,
  headers: {
    Cookie: `LEETCODE_SESSION=${sessionId}`,
  }
})

request.interceptors.response.use(res => {
  return res.data.data
}, err => {
  console.error(err)
})

request.interceptors.request.use(conf => {
  if (!sessionId) {
    try {
      sessionId = getSession('sessionId')
    } catch (e) {
      throw new Error('Please run "login" first')
    }
  }
  return conf
})


async function req (query, key) {
  const res = await request.post(
    '',
    query
  )
  return res[key]
}

export async function getUserInfo() {
  const res = await request.post(
    'https://leetcode-cn.com/graphql/noj-go',
    {
      operationName: "userStatusGlobal",
      query: "query userStatusGlobal {\n  userStatus {\n    isSignedIn\n    isAdmin\n    isStaff\n    isSuperuser\n    isTranslator\n    isVerified\n    isPhoneVerified\n    isWechatVerified\n    checkedInToday\n    username\n    realName\n    userSlug\n    groups\n    avatar\n    optedIn\n    requestRegion\n    region\n    socketToken\n    activeSessionId\n    permissions\n    completedFeatureGuides\n    useTranslation\n    accountStatus {\n      isFrozen\n      inactiveAfter\n      __typename\n    }\n    __typename\n  }\n}\n",
      variables: {}
    }
  )
  return res.userStatus
}

export async function getQuestions({start = 0, end = 100, filters = {}}) {
  return await req(
    {
      query: "\n    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {\n  problemsetQuestionList(\n    categorySlug: $categorySlug\n    limit: $limit\n    skip: $skip\n    filters: $filters\n  ) {\n    hasMore\n    total\n    questions {\n      acRate\n      difficulty\n      freqBar\n      frontendQuestionId\n      isFavor\n      paidOnly\n      solutionNum\n      status\n      title\n      titleCn\n      titleSlug\n      topicTags {\n        name\n        nameTranslated\n        id\n        slug\n      }\n      extra {\n        hasVideoSolution\n        topCompanyTags {\n          imgUrl\n          slug\n          numSubscribed\n        }\n      }\n    }\n  }\n}\n    ",
      variables: {categorySlug: "", skip: start, limit: end, filters}
    },
    'problemsetQuestionList'
  )
}

export async function getAllQuestions() {
  return await req(
    {
      operationName: "allQuestions",
      query: "query allQuestions {\n  allQuestionsBeta {\n    ...questionSummaryFields\n    __typename\n  }\n}\n\nfragment questionSummaryFields on QuestionNode {\n  title\n  titleSlug\n  translatedTitle\n  questionId\n  questionFrontendId\n  status\n  difficulty\n  isPaidOnly\n  categoryTitle\n  __typename\n}\n",
      variables: {}
    },
    'allQuestionsBeta'
  )
}

export async function getQuestionDetail(title) {
  return await req(
    {
      operationName: "questionData",
      query: "query questionData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    categoryTitle\n    boundTopicId\n    title\n    titleSlug\n    content\n    translatedTitle\n    translatedContent\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    isLiked\n    similarQuestions\n    contributors {\n      username\n      profileUrl\n      avatarUrl\n      __typename\n    }\n    langToValidPlayground\n    topicTags {\n      name\n      slug\n      translatedName\n      __typename\n    }\n    companyTagStats\n    codeSnippets {\n      lang\n      langSlug\n      code\n      __typename\n    }\n    stats\n    hints\n    solution {\n      id\n      canSeeDetail\n      __typename\n    }\n    status\n    sampleTestCase\n    metaData\n    judgerAvailable\n    judgeType\n    mysqlSchemas\n    enableRunCode\n    envInfo\n    book {\n      id\n      bookName\n      pressName\n      source\n      shortDescription\n      fullDescription\n      bookImgUrl\n      pressImgUrl\n      productUrl\n      __typename\n    }\n    isSubscribed\n    isDailyQuestion\n    dailyRecordStatus\n    editorType\n    ugcQuestionId\n    style\n    exampleTestcases\n    __typename\n  }\n}\n",
      variables: {titleSlug: title}
    },
    'question'
  )
}

export async function getSummary(username = '99PCT') {
  return await req(
    {
      query: "\n    query userSessionProgress($userSlug: String!) {\n  userProfileUserQuestionSubmitStats(userSlug: $userSlug) {\n    acSubmissionNum {\n      difficulty\n      count\n    }\n    totalSubmissionNum {\n      difficulty\n      count\n    }\n  }\n  userProfileUserQuestionProgress(userSlug: $userSlug) {\n    numAcceptedQuestions {\n      difficulty\n      count\n    }\n    numFailedQuestions {\n      difficulty\n      count\n    }\n    numUntouchedQuestions {\n      difficulty\n      count\n    }\n  }\n}\n    ",
      variables: {userSlug: username}
    },
    'userProfileUserQuestionProgress'
  )
}

export async function getTodayQuestion() {
  return await req(
    {
      query: "\n    query questionOfToday {\n  todayRecord {\n    date\n    userStatus\n    question {\n      questionId\n      frontendQuestionId: questionFrontendId\n      difficulty\n      title\n      titleCn: translatedTitle\n      titleSlug\n      paidOnly: isPaidOnly\n      difficulty\n    freqBar\n      isFavor\n      acRate\n      status\n      solutionNum\n      hasVideoSolution\n      topicTags {\n        name\n        nameTranslated: translatedName\n        id\n      }\n      extra {\n        topCompanyTags {\n          imgUrl\n          slug\n          numSubscribed\n        }\n      }\n    }\n    lastSubmission {\n      id\n    }\n  }\n}\n    ",
      variables: {}
    },
    'todayRecord'
  )
}
