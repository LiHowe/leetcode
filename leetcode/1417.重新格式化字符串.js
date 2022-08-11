/*
@h 2022-08-11 14:50:20
序号: 1417
名称: 重新格式化字符串 | Reformat The String
难度: Easy
标签: 字符串
链接: https://leetcode-cn.com/problems/reformat-the-string
题解: https://leetcode-cn.com/problems/reformat-the-string/solution/

| 通过数量 | 总提交数 | 通过率 |
| 31.1K | 55.7K | 55.8% |

给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。

请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。

请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。



示例 1：

输入：s = "a0b1c2"
输出："0a1b2c"
解释："0a1b2c" 中任意两个相邻字符的类型都不同。 "a0b1c2", "0a1b2c", "0c2a1b" 也是满足题目要求的答案。


示例 2：

输入：s = "leetcode"
输出：""
解释："leetcode" 中只有字母，所以无法满足重新格式化的条件。


示例 3：

输入：s = "1229857369"
输出：""
解释："1229857369" 中只有数字，所以无法满足重新格式化的条件。


示例 4：

输入：s = "covid2019"
输出："c2o0v1i9d"


示例 5：

输入：s = "ab123"
输出："1a2b3"




提示：


	1 <= s.length <= 500
	s 仅由小写英文字母和/或数字组成。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
  if (s.length === 1) return s
  const num = s.match(/[0-9]/g)
  const char = s.match(/[a-z]/g)
  if (!num || !char || !num.length || !char.length || Math.abs(num.length - char.length) >= 2) return ''
  const arr = [num, char]
  arr.sort((a, b) => b.length - a.length)
  let res = ''
  while(res.length !== s.length) {
    res += ((arr[0].pop() || '') + (arr[1].pop() || ''))
  }
  return res
};
// @h code-end

test(reformat, ["a0b1c2d"], "d0a1b2c")
