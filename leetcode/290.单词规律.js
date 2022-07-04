/*
@h 2022-07-04 15:04:46
序号: 290
名称: 单词规律 | Word Pattern
难度: Easy
标签: 哈希表 | 字符串
链接: https://leetcode-cn.com/problems/word-pattern
题解: https://leetcode-cn.com/problems/word-pattern/solution/

| 通过数量 | 总提交数 | 通过率 |
| 107.1K | 237.2K | 45.1% |

给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。



示例1:


输入: pattern = "abba", str = "dog cat cat dog"
输出: true

示例 2:


输入:pattern = "abba", str = "dog cat cat fish"
输出: false

示例 3:


输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false



提示:


	1 <= pattern.length <= 300
	pattern 只包含小写英文字母
	1 <= s.length <= 3000
	s 只包含小写英文字母和 ' '
	s 不包含 任何前导或尾随对空格
	s 中每个单词都被 单个空格 分隔



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sList = s.split(' ')
  if (pattern.length !== sList.length) return false
  const ca = {}
  const ac = {}
  for (let i = 0, l = pattern.length; i < l; i++) {
    debugger
    const char = pattern[i]
    if (!ca[char]) {
      ca[char] = sList[i]
      if (!ac[sList[i]]) {
        ac[sList[i]] = char
      } else {
        return ac[sList[i]] === char
      }
    } else {
      if (ca[char] !== sList[i]) return false
    }
  }
  return true
};
// @h code-end

test(wordPattern, ["aaaa", "dog cat cat dog"], false)
test(wordPattern, ["abba", "dog cat cat fish"], false)
test(wordPattern, ["abba", "dog cat cat dog"], true)
test(wordPattern, ["abba", "dog dog dog dog"], false)
test(wordPattern, ["abc", "dog cat dog"], false)
