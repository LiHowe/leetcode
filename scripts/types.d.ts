export interface SubmissionRecord {
  // 记录ID
  id: string
  // 是否pending
  isPending: string
  // 语言
  lang: string
  // 内存使用
  memory: string
  // 运行时间
  runtime: string
  // 结果：通过 或者 未通过
  statusDisplay: string
  // 备注
  submissionComment: string
  // 提交日期时间戳
  timestamp: string
  // 题解URL
  url: string
  // 节点类型
  __typename: string
}

export interface SubmissionDetail {
  // 代码
  code: string
  id: string
  lang: string
  memory: string
  rawMemory: string
  runtime: string
  // https://leetcode-cn.com/ + sourceUrl 即为题目地址
  sourceUrl: string
  outputDetail: {
    // 实际代码输出结果
    codeOutput: string
    compileError: string
    // 预期代码输出结果
    expectedOutput: string
    // 代码入参
    input: string
    // 最后一个测试用例
    lastTestcase: string
    runtimeError: string
  }
  // 通过的用例数
  passedTestCaseCnt: number
  // 总用例数
  totalTestCaseCnt: number
  statusDisplay: string
  // 备注
  submissionComment: string
  // 提交时间
  timestamp: number
}

export interface SolutionArticleEdge {
  node: SolutionArticle
}

export interface SolutionArticle {
  rewardEnabled: any
  canEditReward: any
  uuid: string
  title: string
  // 英文标题
  slug: string
  sunk: boolean
  chargeType: string
  status: string
  // 文章markdown内容
  content?: string
  // ID
  identifier: string
  canEdit: boolean
  canSee: boolean
  reactionType: any
  reactionsV2: {
    count: number
    reactionType: string
    __typename: string
  }[]
  // 题解tag
  tags: CommonTag[]
  // 日期时间字符串
  createdAt: string
  // 缩略图
  thumbnail: string
  author: User
  // 评论描述
  summary: string
  topic: {
    id: number
    commentCount: number
    viewCount: number
  }
  // 是否是官方题解
  byLeetcode: boolean
  isMyFavorite: boolean
  isMostPopular: boolean
  isEditorsPick: boolean
  // 点击数
  hitCount: number
  videosInfo: VideoInfo[]
}

export interface CommonTag {
  name: string
  nameTranslated: string
  slug: string
  tagType: string
}

export interface User {
  username: string
  profile: UserProfile
}

export interface UserProfile {
  userAvatar: string
  userSlug: string
  realName: string
}

export interface VideoInfo {
  videoId: string
  coverUrl: string
  duration: number
}
