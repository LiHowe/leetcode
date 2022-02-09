/*
@h 2022-02-09 16:48:13
序号: 2006
名称: 差的绝对值为 K 的数对数目 | Count Number of Pairs With Absolute Difference K
难度: Easy
标签: 数组 | 哈希表 | 计数
链接: https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k
题解: https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/solution/

| 通过数量 | 总提交数 | 通过率 |
| 28.4K | 33K | 86.0% |

给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。

|x| 的值定义为：


	如果 x >= 0 ，那么值为 x 。
	如果 x < 0 ，那么值为 -x 。


 

示例 1：

输入：nums = [1,2,2,1], k = 1
输出：4
解释：差的绝对值为 1 的数对为：
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]


示例 2：

输入：nums = [1,3], k = 3
输出：0
解释：没有任何数对差的绝对值为 3 。


示例 3：

输入：nums = [3,2,1,5,4], k = 2
输出：3
解释：差的绝对值为 2 的数对为：
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]


 

提示：


	1 <= nums.length <= 200
	1 <= nums[i] <= 100
	1 <= k <= 99



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
	// 1. 无脑暴力
	// let c = 0
	// for (let i = 0, l = nums.length - 1; i < l; i++) {
	// 	for (let j = i + 1; j < l + 1; j++) {
	// 		if (Math.abs(nums[i] - nums[j]) === k) {
	// 			c++
	// 		}
	// 	}
	// }
	// return c

	// 2. 算出结果比较
	let c = 0
	const map = new Map()
	for (let i = 0, l = nums.length; i < l; i++) {
		c += (map.get(nums[i] - k) || 0) + (map.get(nums[i] + k) || 0)
		map.set(nums[i], (map.get(nums[i]) || 0) + 1)
	}
	console.log(map)
	return c
};
// @h code-end

test(countKDifference, [[1,2,2,1], 1], 4)
test(countKDifference, [[1,3], 3], 0)
test(countKDifference, [[3,2,1,5,4], 2], 3)