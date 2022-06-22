/*
@h 2022-06-22 16:10:43
序号: 169
名称: 多数元素 | Majority Element
难度: Easy
标签: 数组 | 哈希表 | 分治 | 计数 | 排序
链接: https://leetcode-cn.com/problems/majority-element
题解: https://leetcode-cn.com/problems/majority-element/solution/

| 通过数量 | 总提交数 | 通过率 |
| 539.7K | 807.4K | 66.9% |

给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。



示例 1：


输入：nums = [3,2,3]
输出：3

示例 2：


输入：nums = [2,2,1,1,1,2,2]
输出：2



提示：


	n == nums.length
	1 <= n <= 5 * 104
	-109 <= nums[i] <= 109




进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。


*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {}
  nums.forEach(el => {
    if (!map[el]) map[el] = 0
    map[el] += 1
  })
  const arr = Object.entries(map)
  arr.sort((a, b) => a[1] - b[1])
  return +arr.pop()[0]
};
// @h code-end
test(majorityElement, [[2,2,2,2,1,1,2,3,3,3,3]], 2)
test(majorityElement, [[3,2,3]], 3)
