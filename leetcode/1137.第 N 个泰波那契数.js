/*
@h 2022-01-21 15:59:14
序号: 1137
名称: 第 N 个泰波那契数 | N-th Tribonacci Number
难度: Easy
标签: 记忆化搜索 | 数学 | 动态规划
链接: https://leetcode-cn.com/problems/n-th-tribonacci-number
题解: https://leetcode-cn.com/problems/n-th-tribonacci-number/solution/

| 通过数量 | 总提交数 | 通过率 |
| 100.8K | 165.6K | 60.9% |

泰波那契序列 Tn 定义如下：

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。



示例 1：

输入：n = 4
输出：4
解释：
T0 = 0
T1 = 1
T2 = 1
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4


示例 2：

输入：n = 25
输出：1389537




提示：


	0 <= n <= 37
	答案保证是一个 32 位整数，即 answer <= 2^31 - 1。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  // 1. hash记录
  // const map = [0, 1, 1]
  // if (map[n] !== undefined) return map[n]
  // map.length = n
  // for (let i = 3; i <= n; i++) {
  //   map[i] = map[i-3] + map[i-2] + map[i-1]
  // }
  // return map[n]

  // 2. DP
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  let a = 0
  let b = 1
  let c = 1
  for (let i = 3; i <= n; i++) {
    const d = a + b + c
    a = b
    b = c
    c = d
  }
  return c

  // n. 结果解法
  // return [
  //   0, 1, 1, 2, 4, 7, 13, 24, 44, 81,
  //   149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513, 35890,
  //   66012, 121415, 223317, 410744, 755476, 1389537, 2555757, 4700770, 8646064, 15902591,
  //   29249425, 53798080, 98950096, 181997601, 334745777, 615693474, 1132436852, 2082876103
  // ][n]
};
// @h code-end

test(tribonacci, [4], 4)
test(tribonacci, [25], 1389537)
test(tribonacci, [0], 0)
