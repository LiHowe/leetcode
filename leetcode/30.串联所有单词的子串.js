/*
@h 2022-06-23 09:17:51
序号: 30
名称: 串联所有单词的子串 | Substring with Concatenation of All Words
难度: Hard
标签: 哈希表 | 字符串 | 滑动窗口
链接: https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
题解: https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/

| 通过数量 | 总提交数 | 通过率 |
| 113.6K | 302.8K | 37.5% |

给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

 

示例 1：


输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。


示例 2：


输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]


示例 3：


输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]


 

提示：


	1 <= s.length <= 104
	s 由小写英文字母组成
	1 <= words.length <= 5000
	1 <= words[i].length <= 30
	words[i] 由小写英文字母组成



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  // 因为单词长度固定， 所以 words.length * 第一个单词长度 即为窗口长度
  // 一边滑动一边判断
  const wordLength = words[0].length
  const stringLength = words.length * wordLength
  const res = []

  const wordHash = words.reduce((init, item) => {
    if (!init[item]) init[item] = 0
    init[item]++
    return init
  }, {})

  for (let i = 0, l = s.length; i < l; i++) {
    // 子串
    const subStr = s.substring(i, i + stringLength)
    let subStrIdx = 0
    const subHash = {}
    let equalTimes = 0
    // TODO: 待优化，虽然能过，但是效果不好
    while (subStrIdx < subStr.length) {
      const w = subStr.substring(subStrIdx, subStrIdx + wordLength)
      if (!wordHash[w]) break
      if (!subHash[w]) subHash[w] = 0
      subHash[w]++
      if (subHash[w] > wordHash[w]) break
      if (subHash[w] === wordHash[w]) equalTimes++
      subStrIdx += wordLength
    }
    if (equalTimes === Object.keys(wordHash).length) {
      res.push(i)
    }
  }
  return res
};
// @h code-end
test(findSubstring, ['barfoofoobarthefoobarman', ["bar","foo","the"]], [6,9,12])
test(findSubstring, ['wordgoodgoodgoodbestword', ["word","good","best","word"]], [])
test(findSubstring, ['barfoothefoobarman', ["foo","bar"]], [0,9])
test(findSubstring, ["wordgoodgoodgoodbestword", ["word","good","best","good"]], [8])
test(findSubstring, ["lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]], [13])
