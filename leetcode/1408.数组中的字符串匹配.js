/*
@h 2022-01-30 17:42:05
序号: 1408
名称: 数组中的字符串匹配 | String Matching in an Array
难度: Easy
标签: 字符串 | 字符串匹配
链接: https://leetcode-cn.com/problems/string-matching-in-an-array
题解: https://leetcode-cn.com/problems/string-matching-in-an-array/solution/

| 通过数量 | 总提交数 | 通过率 |
| 14.5K | 23.6K | 61.5% |

给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。

如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。

 

示例 1：

输入：words = ["mass","as","hero","superhero"]
输出：["as","hero"]
解释："as" 是 "mass" 的子字符串，"hero" 是 "superhero" 的子字符串。
["hero","as"] 也是有效的答案。


示例 2：

输入：words = ["leetcode","et","code"]
输出：["et","code"]
解释："et" 和 "code" 都是 "leetcode" 的子字符串。


示例 3：

输入：words = ["blue","green","bu"]
输出：[]


 

提示：


	1 <= words.length <= 100
	1 <= words[i].length <= 30
	words[i] 仅包含小写英文字母。
	题目数据 保证 每个 words[i] 都是独一无二的。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
	// 1. 先排序
	words.sort((a, b) => a.length - b.length)
	const res = new Set()
	// 2. 两头比较
	for (let i = 0, l = words.length; i < l - 1; i++) {
		for (let j = i + 1; j < l; j++) {
			if (words[j].includes(words[i])) {
				res.add(words[i])
			}
		}
	}
	return [...res]
};
// @h code-end

test(stringMatching, [["blue","green","bu"]], [])
test(stringMatching, [["leetcode","et","code"]], ["et","code"])
test(stringMatching, [["mass","as","hero","superhero"]], ["as","hero"])
test(stringMatching, [["leetcoder","leetcode","od","hamlet","am"]], ["leetcode","od","am"])