/*
@h 2022-08-03 09:09:07
序号: 899
名称: 有序队列 | Orderly Queue
难度: Hard
标签: 数学 | 字符串 | 排序
链接: https://leetcode-cn.com/problems/orderly-queue
题解: https://leetcode-cn.com/problems/orderly-queue/solution/

| 通过数量 | 总提交数 | 通过率 |
| 7.5K | 12.8K | 58.6% |

给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

 

示例 1：


输入：s = "cba", k = 1
输出："acb"
解释：
在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。


示例 2：


输入：s = "baaca", k = 3
输出："aaabc"
解释：
在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。


bac -> acb
cab -> abc
bbc -> !
aderfa -> aaderf


提示：


	1 <= k <= S.length <= 1000
	s 只由小写字母组成。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
	if (k > 1) {
		return s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
	}
	// k === 1
	let min = s
	// 总共换 s.length 轮
	for (let i = 0; i < s.length; i++) {
		const temp = s.substring(1) + s.charAt(0)
		// 比大小
		min = min < temp ? min : temp
		s = temp
	}
	return min
};

// @h code-end

test(orderlyQueue, ['baaca', 3], 'aaabc')
test(orderlyQueue, ['cba', 1], 'acb')
test(orderlyQueue, ["nhtq", 1], "htqn")
