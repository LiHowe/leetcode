/*
@h 2022-06-30 14:30:49
序号: 1175
名称: 质数排列 | Prime Arrangements
难度: Easy
标签: 数学
链接: https://leetcode-cn.com/problems/prime-arrangements
题解: https://leetcode-cn.com/problems/prime-arrangements/solution/

| 通过数量 | 总提交数 | 通过率 |
| 19.9K | 35.8K | 55.6% |

请你帮忙给从 1 到 n 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。

让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。

由于答案可能会很大，所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。



示例 1：

输入：n = 5
输出：12
解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。


示例 2：

输入：n = 100
输出：682289015




提示：


	1 <= n <= 100



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  const mod = Math.pow(10, 9) + 7
  // 判断是否为质数
  function isPrime(num) {
    if (num <= 3) return num > 1
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return true
  }
  // 所有质数数量
  let sum = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) sum++
  }
  let res = 1
  for (let i = 1; i <= sum; i++) {
    res %= mod
    res *= i
  }
  for (let i = 1; i <= n-sum; i++) {
    res %= mod
    res *= i
  }
  return res % mod
};
// @h code-end

test(numPrimeArrangements,[5], 12)
test(numPrimeArrangements,[100], 682289015)
