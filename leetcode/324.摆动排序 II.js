/*
@h 2022-06-28 10:52:02
序号: 324
名称: 摆动排序 II | Wiggle Sort II
难度: Medium
标签: 数组 | 分治 | 快速选择 | 排序
链接: https://leetcode-cn.com/problems/wiggle-sort-ii
题解: https://leetcode-cn.com/problems/wiggle-sort-ii/solution/

| 通过数量 | 总提交数 | 通过率 |
| 39K | 99.5K | 39.2% |

给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。



示例 1：


输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。


示例 2：


输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]




提示：


	1 <= nums.length <= 5 * 104
	0 <= nums[i] <= 5000
	题目数据保证，对于给定的输入 nums ，总能产生满足题目要求的结果




进阶：你能用 O(n) 时间复杂度和 / 或原地 O(1) 额外空间来实现吗？

DHAFKMUIPNKZQHOT
*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  // 思路： 先排序， 然后每隔一个将末尾的数插到数组中来
  nums.sort((a,b) => b - a)
  const l = nums.length
  const big = nums.slice(0, l/2)
  const small = nums.slice(l/2)
  for (let i = 0; i < l; i+=2) {
    nums[i] = small.shift()
    nums[i+1] = big.shift()
  }
  nums.length = l
};
// @h code-end
let num = [1,3,2,2,3,1]
test(wiggleSort, [num], num === [2,3,1,3,1,2])
test(wiggleSort, [[1,5,1,1,6,4]], [1,6,1,5,1,4])
