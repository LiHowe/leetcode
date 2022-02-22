/*
@h 2022-02-22 11:00:02
序号: 371
名称: 两整数之和 | Sum of Two Integers
难度: Medium
标签: 位运算 | 数学
链接: https://leetcode-cn.com/problems/sum-of-two-integers
题解: https://leetcode-cn.com/problems/sum-of-two-integers/solution/

| 通过数量 | 总提交数 | 通过率 |
| 86.8K | 141.4K | 61.4% |

给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

 

示例 1：


输入：a = 1, b = 2
输出：3


示例 2：


输入：a = 2, b = 3
输出：5


 

提示：


	-1000 <= a, b <= 1000



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
	while (b) {
		let c = (a & b) << 1 // 进位
		a ^= b               // 非进位和
		b = c                // 进位
	}
	return a
};
// @h code-end