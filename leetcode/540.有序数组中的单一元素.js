/*
@h 2022-02-14 19:30:07
序号: 540
名称: 有序数组中的单一元素 | Single Element in a Sorted Array
难度: Medium
标签: 数组 | 二分查找
链接: https://leetcode-cn.com/problems/single-element-in-a-sorted-array
题解: https://leetcode-cn.com/problems/single-element-in-a-sorted-array/solution/

| 通过数量 | 总提交数 | 通过率 |
| 74.8K | 123.1K | 60.7% |

给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。

请你找出并返回只出现一次的那个数。

你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。



示例 1:


输入: nums = [1,1,2,3,3,4,4,8,8]
输出: 2


示例 2:


输入: nums =  [3,3,7,7,10,11,11]
输出: 10




<meta charset="UTF-8" />

提示:


	1 <= nums.length <= 105
	0 <= nums[i] <= 105



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  if (nums.length === 1) return nums[0]
  // 1. 暴力
  // for (let i = 0, l = nums.length - 1; i <= l; i+=2) {
  //   if (nums[i] !== nums[i + 1]) {
  //     return nums[i]
  //   }
  // }
  // 2. 二分查找, 因为每个元素出现两次， 所以目标元素肯定下标是偶数
  let left = 0
  let right = nums.length - 1
  let mid
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left
    mid -= mid & 1
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2
    } else {
      right = mid
    }
  }
  return nums[left]
};
// @h code-end
test(singleNonDuplicate, [[3,3,7,7,10,11,11]], 10)
test(singleNonDuplicate, [[1,1,2,3,3,4,4,8,8]], 2)
test(singleNonDuplicate, [[1,1,2]], 2)
test(singleNonDuplicate, [[1]], 1)
