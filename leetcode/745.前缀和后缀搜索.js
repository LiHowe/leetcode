/*
@h 2022-07-14 09:11:55
序号: 745
名称: 前缀和后缀搜索 | Prefix and Suffix Search
难度: Hard
标签: 设计 | 字典树 | 字符串
链接: https://leetcode-cn.com/problems/prefix-and-suffix-search
题解: https://leetcode-cn.com/problems/prefix-and-suffix-search/solution/

| 通过数量 | 总提交数 | 通过率 |
| 6.1K | 13.6K | 44.6% |

设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

实现 WordFilter 类：


	WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
	f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。


 

示例：


输入
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
输出
[null, 0]
解释
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。

 

提示：


	1 <= words.length <= 104
	1 <= words[i].length <= 7
	1 <= pref.length, suff.length <= 7
	words[i]、pref 和 suff 仅由小写英文字母组成
	最多对函数 f 执行 104 次调用



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {

};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {

};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @h code-end