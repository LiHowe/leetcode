/*
@h 2022-02-10 16:08:54
序号: 1876
名称: 长度为三且各字符不同的子字符串 | Substrings of Size Three with Distinct Characters
难度: Easy
标签: 哈希表 | 字符串 | 计数 | 滑动窗口
链接: https://leetcode-cn.com/problems/substrings-of-size-three-with-distinct-characters
题解: https://leetcode-cn.com/problems/substrings-of-size-three-with-distinct-characters/solution/

| 通过数量 | 总提交数 | 通过率 |
| 8K | 11K | 72.1% |

如果一个字符串不含有任何重复字符，我们称这个字符串为 好 字符串。

给你一个字符串 s ，请你返回 s 中长度为 3 的 好子字符串 的数量。

注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。

子字符串 是一个字符串中连续的字符序列。

 

示例 1：


输入：s = "xyzzaz"
输出：1
解释：总共有 4 个长度为 3 的子字符串："xyz"，"yzz"，"zza" 和 "zaz" 。
唯一的长度为 3 的好子字符串是 "xyz" 。


示例 2：


输入：s = "aababcabc"
输出：4
解释：总共有 7 个长度为 3 的子字符串："aab"，"aba"，"bab"，"abc"，"bca"，"cab" 和 "abc" 。
好子字符串包括 "abc"，"bca"，"cab" 和 "abc" 。


 

提示：


	1 <= s.length <= 100
	s​​​​​​ 只包含小写英文字母。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
	// 1. 暴力
	let c = 0
	for(let i = 0, l = s.length - 3; i <= l; i++) {
		if (s[i] !== s[i+1] && s[i+1] !== s[i+2] && s[i] !== s[i+2]) {
			c++
		}
	}
	return c
};
// @h code-end
test(countGoodSubstrings, ['aababcabc'], 4)
test(countGoodSubstrings, ['xyzzaz'], 1)
test(countGoodSubstrings, ["npdrlvffzefb"], 8)
test(countGoodSubstrings, ["icolgrjedehnd"], 10)