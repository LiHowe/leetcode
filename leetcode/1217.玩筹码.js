/*
@h 2022-07-08 09:10:30
序号: 1217
名称: 玩筹码 | Minimum Cost to Move Chips to The Same Position
难度: Easy
标签: 贪心 | 数组 | 数学
链接: https://leetcode-cn.com/problems/minimum-cost-to-move-chips-to-the-same-position
题解: https://leetcode-cn.com/problems/minimum-cost-to-move-chips-to-the-same-position/solution/

| 通过数量 | 总提交数 | 通过率 |
| 31.4K | 43.8K | 71.8% |

有 n 个筹码。第 i 个筹码的位置是<meta charset="UTF-8" /> position[i] 。

我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 i 个筹码的位置从 position[i] 改变为:

<meta charset="UTF-8" />


	position[i] + 2 或 position[i] - 2 ，此时 cost = 0
	position[i] + 1 或 position[i] - 1 ，此时 cost = 1


返回将所有筹码移动到同一位置上所需要的 最小代价 。



示例 1：

<img alt="" src="https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg" style="height: 217px; width: 750px;" />


输入：position = [1,2,3]
输出：1
解释：第一步:将位置3的筹码移动到位置1，成本为0。
第二步:将位置2的筹码移动到位置1，成本= 1。
总成本是1。


示例 2：

<img alt="" src="https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg" style="height: 306px; width: 750px;" />


输入：position = [2,2,2,3,3]
输出：2
解释：我们可以把位置3的两个筹码移到位置2。每一步的成本为1。总成本= 2。


示例 3:


输入：position = [1,1000000000]
输出：1




提示：


	1 <= chips.length <= 100
	1 <= chips[i] <= 10^9



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let odd = 0
  let even = 0
  for (let i of position) {
    if (i % 2) {
      even++
    } else {
      odd++
    }
  }
  return Math.min(odd, even)
};
test(minCostToMoveChips, [[1,1000000000]], 1)
test(minCostToMoveChips, [[2,2,2,3,3]], 2)
test(minCostToMoveChips, [[1,2,3]], 1)
