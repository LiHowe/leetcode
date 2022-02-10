/*
@h 2022-02-10 15:31:53
序号: 1447
名称: 最简分数 | Simplified Fractions
难度: Medium
标签: 数学 | 字符串 | 数论
链接: https://leetcode-cn.com/problems/simplified-fractions
题解: https://leetcode-cn.com/problems/simplified-fractions/solution/

| 通过数量 | 总提交数 | 通过率 |
| 24.4K | 36.3K | 67.3% |

给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

 

示例 1：

输入：n = 2
输出：["1/2"]
解释："1/2" 是唯一一个分母小于等于 2 的最简分数。

示例 2：

输入：n = 3
输出：["1/2","1/3","2/3"]


示例 3：

输入：n = 4
输出：["1/2","1/3","1/4","2/3","3/4"]
解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。

示例 4：

输入：n = 1
输出：[]


 

提示：


	1 <= n <= 100



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
	const res = []

	for (let i = 2; i <=n; i++) {
		for (let j = 1; j < i; j++) {
			if (gcd(i, j) === 1) {
				res.push(`${j}/${i}`)
			}
		}
	}
	// 判断是否是最简分数, 即 a, b互质
	function gcd(a, b) {
		return b ? gcd(b, a % b) : a
	}
	return res
};
// @h code-end
test(simplifiedFractions, [4], ["1/2","1/3","1/4","2/3","3/4"])
test(simplifiedFractions, [2], ["1/2"])
test(simplifiedFractions, [3], ["1/2","1/3","2/3"])
test(simplifiedFractions, [1], [])