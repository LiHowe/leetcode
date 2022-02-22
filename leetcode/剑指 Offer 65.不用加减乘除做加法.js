/*
@h 2022-02-22 10:42:22
序号: 剑指 Offer 65
名称: 不用加减乘除做加法 | 不用加减乘除做加法 LCOF
难度: Easy
标签: 位运算 | 数学
链接: https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof
题解: https://leetcode-cn.com/problems/bu-yong-jia-jian-cheng-chu-zuo-jia-fa-lcof/solution/

| 通过数量 | 总提交数 | 通过率 |
| 87.6K | 148.4K | 59.0% |

写一个函数，求两个整数之和，要求在函数体内不得使用 &ldquo;+&rdquo;、&ldquo;-&rdquo;、&ldquo;*&rdquo;、&ldquo;/&rdquo; 四则运算符号。

 

示例:

输入: a = 1, b = 1
输出: 2

 

提示：


	a, b 均可能是负数或 0
	结果不会溢出 32 位整数



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
	/**
	22 + 89 = 111

  百 十 个
     2  2
   + 8  9
   ------
     0  1 // 本位
     1  1 // 进位

	01 是计算后的本位，直接记录。
	11 是计算后的进位，需要：做 进位逻辑 后进入下轮计算。
	（进位逻辑：乘以进制数，也就是 11 * 10）
	而这里没有下轮计算了，最终得到 111

       0 1
   + 1 1 0
   --------
     1 1 1
	*/
	while (b) {
		let c = (a & b) << 1 // 进位
		a ^= b               // 非进位和
		b = c                // 进位
	}
	return a
};
// @h code-end

test(add, [1,1], 2)
test(add, [1,2], 3)
test(add, [-1,1], 0)
test(add, [1234, 4321], 5555)