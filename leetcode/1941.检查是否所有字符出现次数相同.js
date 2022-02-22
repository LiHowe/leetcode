/*
@h 2022-02-22 09:48:13
序号: 1941
名称: 检查是否所有字符出现次数相同 | Check if All Characters Have Equal Number of Occurrences
难度: Easy
标签: 哈希表 | 字符串 | 计数
链接: https://leetcode-cn.com/problems/check-if-all-characters-have-equal-number-of-occurrences
题解: https://leetcode-cn.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solution/

| 通过数量 | 总提交数 | 通过率 |
| 6.7K | 8.8K | 75.8% |

给你一个字符串 s ，如果 s 是一个 好 字符串，请你返回 true ，否则请返回 false 。

如果 s 中出现过的 所有 字符的出现次数 相同 ，那么我们称字符串 s 是 好 字符串。

 

示例 1：

输入：s = "abacbc"
输出：true
解释：s 中出现过的字符为 'a'，'b' 和 'c' 。s 中所有字符均出现 2 次。


示例 2：

输入：s = "aaabb"
输出：false
解释：s 中出现过的字符为 'a' 和 'b' 。
'a' 出现了 3 次，'b' 出现了 2 次，两者出现次数不同。


 

提示：


	1 <= s.length <= 1000
	s 只包含小写英文字母。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
	// 1. hash记录
	const map = {}
	for (let i = 0, l = s.length; i < l; i++) {
		const char = s[i]
		map[char] = map[char] ? map[char] + 1 : 1
	}
	return new Set(Object.values(map)).size === 1
};
// @h code-end

test(areOccurrencesEqual, ['aaabb'], false)
test(areOccurrencesEqual, ['aaabbb'], true)
test(areOccurrencesEqual, ['a'], true)