/*
序号: 1716
名称: 计算力扣银行的钱 | calculate-money-in-leetcode-bank
难度: Easy
标签: 数学
链接: https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank
题解: https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/solution/

Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。

最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。<span style="">

给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

 

示例 1：

输入：n = 4
输出：10
解释：第 4 天后，总额为 1 + 2 + 3 + 4 = 10 。
1 2 3 4 5 6 7
28
35

示例 2：

输入：n = 10
输出：37
解释：第 10 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37 。注意到第二个星期一，Hercy 存入 2 块钱。


示例 3：

输入：n = 20
输出：96
解释：第 20 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96 。


 

提示：


	1 <= n <= 1000



*/

const { test } = require('./utils')
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  // 1. 等差数列求和
  const r = n % 7
  const w = Math.ceil(n / 7)
  const sum = (a, s, step) => (a + a + step * (s - 1)) * s / 2
  return !r ? sum(28, w, 7) : sum(28, w - 1, 7) + sum(w, r, 1)
};

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  // 2. 模拟
  let res = 0
  for (let i = 1; i <= n; i++) {
    res += Math.floor((i - 1) / 7) + (i - 1) % 7 + 1
  }
  return res
};

test(totalMoney, [20], 96)
test(totalMoney, [10], 37)
test(totalMoney, [1], 1)
test(totalMoney, [7], 28)
test(totalMoney, [26], 135)
