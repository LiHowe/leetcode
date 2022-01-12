/*
序号: 334
名称: 递增的三元子序列 | increasing-triplet-subsequence
难度: Medium
标签: 贪心 | 数组
链接: https://leetcode-cn.com/problems/increasing-triplet-subsequence
题解: https://leetcode-cn.com/problems/increasing-triplet-subsequence/solution/

给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

示例 1：


输入：nums = [1,2,3,4,5]
输出：true
解释：任何 i < j < k 的三元组都满足题意


示例 2：


输入：nums = [5,4,3,2,1]
输出：false
解释：不存在满足题意的三元组

示例 3：


输入：nums = [2,1,5,0,4,6]
输出：true
解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6


提示：


	1 <= nums.length <= 5 * 105
	-231 <= nums[i] <= 231 - 1


进阶：你能实现时间复杂度为 O(n) ，空间复杂度为 O(1) 的解决方案吗？


*/

const { test } = require('./utils')
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	if (nums.length < 3) return false
	// Plan A. 以下标分割数组, 只要左面有比当前小的, 右边有比当前大的就行
	// Plan B. 找第二小的数
	let m1 = Infinity
	let m2 = Infinity
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= m1) {
			m1 = nums[i]
		} else if (nums[i] <= m2) {
			m2 = nums[i]
		} else {
			return true
		}
	}
	return false
};

test(increasingTriplet, [[2,1,5,0,4,6]], true)
test(increasingTriplet, [[5,4,3,2,1]], false)
test(increasingTriplet, [[20,100,10,12,5,13]], true)