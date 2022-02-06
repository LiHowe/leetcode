/*
@h 2022-02-06 22:36:08
序号: 1748
名称: 唯一元素的和 | Sum of Unique Elements
难度: Easy
标签: 数组 | 哈希表 | 计数
链接: https://leetcode-cn.com/problems/sum-of-unique-elements
题解: https://leetcode-cn.com/problems/sum-of-unique-elements/solution/

| 通过数量 | 总提交数 | 通过率 |
| 32.9K | 41.6K | 79.0% |

给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

请你返回 nums 中唯一元素的 和 。

 

示例 1：

输入：nums = [1,2,3,2]
输出：4
解释：唯一元素为 [1,3] ，和为 4 。


示例 2：

输入：nums = [1,1,1,1,1]
输出：0
解释：没有唯一元素，和为 0 。


示例 3 ：

输入：nums = [1,2,3,4,5]
输出：15
解释：唯一元素为 [1,2,3,4,5] ，和为 15 。


 

提示：


	1 <= nums.length <= 100
	1 <= nums[i] <= 100



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  // 1. hash记录
  // const hash = {}
  // nums.forEach(n => {
  //   if (!hash[n]) {
  //     hash[n] = 0
  //   }
  //   hash[n]++
  // })
  // let sum = 0
  // Object.keys(hash).forEach(k => {
  //   if (hash[k] === 1) {
  //     sum += +k
  //   }
  // })
  // return sum
  // 2. 一遍循环
  let sum = 0
  // 记录出现次数
  const state = new Map()
  nums.forEach((n, i) => {
    if (!state.has(n)) {
      sum += n
      state.set(n, 1)
    } else {
      if (state.get(n)) {
        sum -= n
        state.set(n, 0)
      }
    }
  })
  return sum
};
// @h code-end

test(sumOfUnique, [[1,2,3,4,5]], 15)
test(sumOfUnique, [[1,2,3,2]], 4)
test(sumOfUnique, [[1,1,1,1,1]], 0)
