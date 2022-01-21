/*
@h 2022-01-21 15:41:56
序号: 367
名称: 有效的完全平方数 | Valid Perfect Square
难度: Easy
标签: 数学 | 二分查找
链接: https://leetcode-cn.com/problems/valid-perfect-square
题解: https://leetcode-cn.com/problems/valid-perfect-square/solution/

| 通过数量 | 总提交数 | 通过率 |
| 127.1K | 283.9K | 44.8% |

给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

进阶：不要 使用任何内置的库函数，如  sqrt 。

 

示例 1：


输入：num = 16
输出：true


示例 2：


输入：num = 14
输出：false


 

提示：


	1 <= num <= 2^31 - 1



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  // 1. 内置库
  // return Number.isInteger(Math.sqrt(num))

  // 2.
  // return num ** 0.5 % 1 === 0

  // 3. 数学公式
  let x = 1
  while (num > 0) {
    num -= x
    x += 2
  }
  return num === 0
};
// @h code-end

test(isPerfectSquare,[16], true)
test(isPerfectSquare,[1], true)
test(isPerfectSquare,[19], false)
test(isPerfectSquare,[3], false)
