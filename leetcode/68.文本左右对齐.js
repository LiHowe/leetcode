/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 *
 * https://leetcode-cn.com/problems/text-justification/description/
 *
 * algorithms
 * Hard (47.03%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    27K
 * Total Submissions: 53.6K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * 给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。
 * 
 * 你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。
 * 
 * 要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。
 * 
 * 文本的最后一行应为左对齐，且单词之间不插入额外的空格。
 * 
 * 说明:
 * 
 * 
 * 单词是指由非空格字符组成的字符序列。
 * 每个单词的长度大于 0，小于等于 maxWidth。
 * 输入单词数组 words 至少包含一个单词。
 * 
 * 
 * 示例:
 * 
 * 输入:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * 输出:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * 输出:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * 解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
 * 因为最后一行应为左对齐，而不是左右两端对齐。       
 * ⁠    第二行同样为左对齐，这是因为这行只包含一个单词。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * words =
 * ["Science","is","what","we","understand","well","enough","to","explain",
 * "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * 输出:
 * [
 * "Science  is  what we",
 * ⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = []
  const lineWords = []
  let length = 0
  // 默认每个单词后面都加一个空格, 即单词长度 + 1
  // 每一行的空格数 = 单词数 - 1
  words.forEach(w => {
    console.log('current word is: ', w)
    console.log('except length is: ', w.length + length + lineWords.length)
    // 如果能放下当前单词
    if (w.length + length + lineWords.length  <= maxWidth) {
      lineWords.push(w)
      length += w.length
    } else {
      // 放不下, 换一行
      res.push(fillSpace({
        lineWords,
        length
      }))
      lineWords.length = 0
      length = 0
    }
  })
  
  // 填充空格
  function fillSpace({ lineWords, length }) {
    // 剩余长度
    let rest = maxWidth - length
    console.log('lineWords: ', lineWords, 'length: ', length, 'rest: ', rest)
    while (rest) {
      for (let i = 0, l = lineWords.length - 1; i < l; i++) {
        lineWords[i] += ' '
        rest--
      }
    }
    return lineWords.join('')
  }

  return res
};
// @lc code=end

test(
  fullJustify,
  [
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  ],
  [
   "This    is    an",
   "example  of text",
   "justification.  "
  ]
)

// test(
//   fullJustify,
//   [
//     ["What","must","be","acknowledgment","shall","be"],
//     16
//   ],
//   [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
//   ]
// )