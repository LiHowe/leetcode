/*
@h 2022-07-21 09:12:36
序号: 1800
名称: 最大升序子数组和 | Maximum Ascending Subarray Sum
难度: Easy
标签: 数组
链接: https://leetcode-cn.com/problems/maximum-ascending-subarray-sum
题解: https://leetcode-cn.com/problems/maximum-ascending-subarray-sum/solution/

| 通过数量 | 总提交数 | 通过率 |
| 13K | 19.3K | 67.3% |

给你一个正整数组成的数组 nums ，返回 nums 中一个 升序 子数组的最大可能元素和。

子数组是数组中的一个连续数字序列。

已知子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，若对所有 i（l <= i < r），numsi  < numsi+1 都成立，则称这一子数组为 升序 子数组。注意，大小为 1 的子数组也视作 升序 子数组。

 

示例 1：


输入：nums = [10,20,30,5,10,50]
输出：65
解释：[5,10,50] 是元素和最大的升序子数组，最大元素和为 65 。


示例 2：


输入：nums = [10,20,30,40,50]
输出：150
解释：[10,20,30,40,50] 是元素和最大的升序子数组，最大元素和为 150 。 


示例 3：


输入：nums = [12,17,15,13,10,11,12]
输出：33
解释：[10,11,12] 是元素和最大的升序子数组，最大元素和为 33 。 


示例 4：


输入：nums = [100,10,1]
输出：100


 

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
var maxAscendingSum = function(nums) {
	// [10,20,30,5,10,50]
	let max = 0
	let temp = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= nums[i + 1]) {
			max += nums[i]
			temp = Math.max(max, temp)
			max = 0
			continue
		}
		max += nums[i]
	}
	return Math.max(max, temp)
};
// @h code-end
test(maxAscendingSum, [[10, 20, 30, 5, 10, 50]], 65)
test(maxAscendingSum, [[10, 20, 30, 40, 50]], 150)
test(maxAscendingSum, [[12, 17, 15, 13, 10, 11, 12]], 33)
test(maxAscendingSum, [[100, 10, 1]], 100)
test(maxAscendingSum, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], 55)
test(maxAscendingSum, [[3,6,10,1,8,9,9,8,9]], 19)