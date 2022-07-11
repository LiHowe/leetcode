/*
@h 2022-07-10 01:38:00
序号: 888
名称: 公平的糖果交换 | Fair Candy Swap
难度: Easy
标签: 数组 | 哈希表 | 二分查找 | 排序
链接: https://leetcode-cn.com/problems/fair-candy-swap
题解: https://leetcode-cn.com/problems/fair-candy-swap/solution/

| 通过数量 | 总提交数 | 通过率 |
| 61.4K | 96.1K | 63.9% |

爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 aliceSizes 和 bobSizes ，aliceSizes[i] 是爱丽丝拥有的第 i 盒糖果中的糖果数量，bobSizes[j] 是鲍勃拥有的第 j 盒糖果中的糖果数量。

两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。

返回一个整数数组 answer，其中 answer[0] 是爱丽丝必须交换的糖果盒中的糖果的数目，answer[1] 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 任何一个 。题目测试用例保证存在与输入对应的答案。



示例 1：


输入：aliceSizes = [1,1], bobSizes = [2,2]
输出：[1,2]


示例 2：


输入：aliceSizes = [1,2], bobSizes = [2,3]
输出：[1,2]


示例 3：


输入：aliceSizes = [2], bobSizes = [1,3]
输出：[2,3]


示例 4：


输入：aliceSizes = [1,2,5], bobSizes = [2,4]
输出：[5,4]




提示：


	1 <= aliceSizes.length, bobSizes.length <= 104
	1 <= aliceSizes[i], bobSizes[j] <= 105
	爱丽丝和鲍勃的糖果总数量不同。
	题目数据保证对于给定的输入至少存在一个有效答案。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
  const sumA = aliceSizes.reduce((a, b) => a + b)
  const sumB = bobSizes.reduce((a, b) => a + b)
  const delta = Math.floor((sumA - sumB) / 2)
  // 构件哈希，可直接用has判断是否存在特定数字
  const rec = new Set(aliceSizes)
  for (const y of bobSizes) {
    const x = y + delta
    if (rec.has(x)) {
      return [x, y]
    }
  }
};
// @h code-end

test(fairCandySwap, [[1,2,5],[2,4]], [5,4])
