/*
累加数 是一个字符串，组成它的数字可以形成累加序列。

一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。

给你一个只包含数字&nbsp;'0'-'9'&nbsp;的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。

说明：累加序列里的数 不会 以 0 开头，所以不会出现&nbsp;1, 2, 03 或者&nbsp;1, 02, 3&nbsp;的情况。

&nbsp;

示例 1：


输入："112358"
输出：true 
解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8


示例&nbsp;2：


输入："199100199"
输出：true 
解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199

&nbsp;

提示：


	1 &lt;= num.length &lt;= 35
	num 仅由数字（0 - 9）组成


&nbsp;

进阶：你计划如何处理由过大的整数输入导致的溢出?

*/
const { test } = require('./utils')
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
	if (num.length < 3) return false
	// 第二个数字的开始位置和结束位置
	
	function valid (subnum, startStr) {
		// 第一个指针
		for (let i = 0; i < subnum.length; i++) {
			for(let j = i+1; j < subnum.length - 1; j++) {
				const cur = subnum.substring(i, j)
				const sum = +cur + +startStr
				const rest = subnum.substring(j)
				if (!rest.startsWith('' + sum)) {
					continue
				} else {
					if (rest === `${sum}`) return true
					return valid(rest, cur)
				}
			}
		}
		return false
	}
	
	return valid(num.substring(1), num[0])
};

// test(isAdditiveNumber, ['112358'], true)
test(isAdditiveNumber, ['11213'], true)
// test(isAdditiveNumber, ['2911'], true)
// test(isAdditiveNumber, ['101'], true)
// test(isAdditiveNumber, ['199100199'], true)
// test(isAdditiveNumber, ['12342'], false)