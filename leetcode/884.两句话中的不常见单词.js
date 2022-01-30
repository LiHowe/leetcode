/*
@h 2022-01-30 16:42:34
序号: 884
名称: 两句话中的不常见单词 | Uncommon Words from Two Sentences
难度: Easy
标签: 哈希表 | 字符串
链接: https://leetcode-cn.com/problems/uncommon-words-from-two-sentences
题解: https://leetcode-cn.com/problems/uncommon-words-from-two-sentences/solution/

| 通过数量 | 总提交数 | 通过率 |
| 33.4K | 47.3K | 70.7% |

句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。

 




示例 1：


输入：s1 = "this apple is sweet", s2 = "this apple is sour"
输出：["sweet","sour"]


示例 2：


输入：s1 = "apple apple", s2 = "banana"
输出：["banana"]


 

提示：


	1 <= s1.length, s2.length <= 200
	s1 和 s2 由小写英文字母和空格组成
	s1 和 s2 都不含前导或尾随空格
	s1 和 s2 中的所有单词间均由单个空格分隔



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
	const all = [...s1.split(' '), ...s2.split(' ')]
	const map = {}
	all.forEach(word => {
		map[word] = map[word] ? map[word] + 1 : 1
	})
	return Object.keys(map).filter(word => map[word] === 1)
};
// @h code-end

test(uncommonFromSentences, ["apple apple", "banana"], ["banana"])
test(uncommonFromSentences, ["this apple is sweet", "this apple is sour"], ["sweet","sour"])