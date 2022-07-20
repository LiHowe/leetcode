/*
@h 2022-07-18 09:44:06
序号: 762
名称: 二进制表示中质数个计算置位 | Prime Number of Set Bits in Binary Representation
难度: Easy
标签: 位运算 | 数学
链接: https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation
题解: https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/solution/

| 通过数量 | 总提交数 | 通过率 |
| 52.4K | 69.3K | 75.6% |

给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。

计算置位位数 就是二进制表示中 1 的个数。


	例如， 21 的二进制表示 10101 有 3 个计算置位。


 

示例 1：


输入：left = 6, right = 10
输出：4
解释：
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)
共计 4 个计算置位为质数的数字。


示例 2：


输入：left = 10, right = 15
输出：5
解释：
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)
共计 5 个计算置位为质数的数字。


 

提示：


	1 <= left <= right <= 106
	0 <= right - left <= 104



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
	function isPrime(num) {
    if (num <= 3) return num > 1
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return true
  }
	let count = 0
	for (let i = left; i <= right; i++) {
		let num = i.toString(2).replaceAll('0', '').length
		if (isPrime(num)) count++
	}
	return count
};
// @h code-end

test(countPrimeSetBits, [6, 10], 4)
test(countPrimeSetBits, [10, 15], 5)