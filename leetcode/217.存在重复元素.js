/*
@h 2022-01-21 15:43:51
序号: 217
名称: 存在重复元素 | Contains Duplicate
难度: Easy
标签: 数组 | 哈希表 | 排序
链接: https://leetcode-cn.com/problems/contains-duplicate
题解: https://leetcode-cn.com/problems/contains-duplicate/solution/

| 通过数量 | 总提交数 | 通过率 |
| 457.8K | 823.2K | 55.6% |

给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。


示例 1：


输入：nums = [1,2,3,1]
输出：true

示例 2：


输入：nums = [1,2,3,4]
输出：false

示例 3：


输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true



提示：


	1 <= nums.length <= 105
	-109 <= nums[i] <= 109



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // // 1.转set, 比较长度
  // return new Set(nums).size !== nums.length
  // 2. 遍历, 记录
  const res = {}
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (!res[item]) {
      res[item] = 1
    } else {
      return true
    }
  }
  return false
};
// @h code-end

test(containsDuplicate, [[1,1,1,3,3,4,3,2,4,2]], true)
test(containsDuplicate, [[1,2,3,1]], true)
test(containsDuplicate, [[1,2,3,4]], false)
