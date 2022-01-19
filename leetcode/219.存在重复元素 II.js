/*
序号: 219
名称: 存在重复元素 II | Contains Duplicate II
难度: Easy
标签: 数组 | 哈希表 | 滑动窗口
链接: https://leetcode-cn.com/problems/contains-duplicate-ii
题解: https://leetcode-cn.com/problems/contains-duplicate-ii/solution/

| 通过数量 | 总提交数 | 通过率 |
| 124.4K | 294.6K | 42.2% |

给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

 

示例 1：


输入：nums = [1,2,3,1], k = 3
输出：true

示例 2：


输入：nums = [1,0,1,1], k = 1
输出：true

示例 3：


输入：nums = [1,2,3,1,2,3], k = 2
输出：false

 

 

提示：


	1 <= nums.length <= 105
	-109 <= nums[i] <= 109
	0 <= k <= 105



*/

const { test } = require('./utils')
// lc-start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	if (nums.length < 2) return false
	for (let start = 0, l = nums.length; start < l - 1; start++) {
		for (let i = start+1; i <= Math.min(start + k, l); i++) {
			if (nums[i] === nums[start]) return true
		}
	}
	return false
};
// lc-end

test(containsNearbyDuplicate, [[1,2,3,1,2,3], 2], false)
test(containsNearbyDuplicate, [[1,0,1,1], 1], true)
test(containsNearbyDuplicate, [[1,2,3,1], 3], true)
test(containsNearbyDuplicate, [[99,99], 2], true)
test(containsNearbyDuplicate, [[2, 2], 3], true)