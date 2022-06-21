/*
@h 2022-06-21 09:38:59
序号: 1784
名称: 检查二进制字符串字段 | Check if Binary String Has at Most One Segment of Ones
难度: Easy
标签: 字符串
链接: https://leetcode-cn.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones
题解: https://leetcode-cn.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solution/

| 通过数量 | 总提交数 | 通过率 |
| 10.8K | 25.4K | 42.5% |

给你一个二进制字符串 s ，该字符串 不含前导零 。

如果 s 包含 零个或一个由连续的 '1' 组成的字段 ，返回 true​​​ 。否则，返回 false 。

 

示例 1：


输入：s = "1001"
输出：false
解释：字符串中的 1 没有形成一个连续字段。


示例 2：


输入：s = "110"
输出：true

 

提示：


	1 <= s.length <= 100
	s[i]​​​​ 为 '0' 或 '1'
	s[0] 为 '1'



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
	return s.match(/1+/g).length <= 1
};
// @h code-end

test(checkOnesSegment, ['1001'], false)
test(checkOnesSegment, ['1101'], false)
test(checkOnesSegment, ['1100'], true)
test(checkOnesSegment, ['110'], true)