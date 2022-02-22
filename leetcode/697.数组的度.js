/*
@h 2022-02-22 10:00:21
序号: 697
名称: 数组的度 | Degree of an Array
难度: Easy
标签: 数组 | 哈希表
链接: https://leetcode-cn.com/problems/degree-of-an-array
题解: https://leetcode-cn.com/problems/degree-of-an-array/solution/

| 通过数量 | 总提交数 | 通过率 |
| 71.5K | 118.6K | 60.3% |

给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：


输入：nums = [1,2,2,3,1]
输出：2
解释：
输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
连续子数组里面拥有相同度的有如下所示：
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。


示例 2：


输入：nums = [1,2,2,3,1,4,2]
输出：6
解释：
数组的度是 3 ，因为元素 2 重复出现 3 次。
所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。


 

提示：


	nums.length 在 1 到 50,000 范围内。
	nums[i] 是一个在 0 到 49,999 范围内的整数。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
	// 记录数量
	const map = new Map()
	nums.forEach((item, i) => {
		if (!map[item]) {
			map[item] = {
				count: 1,
				start: i,
				end: i
			}
		} else {
			map[item].count++
			map[item].end = i
		}
	})
	const arr = Object.values(map).sort((a, b) => b.count - a.count)
	let len = Infinity
	const max = arr[0].count
	for (let i = 0, l = arr.length; i < l; i++) {
		if (arr[i].count < max) return len
		const currLen = arr[i].end - arr[i].start + 1
		len = Math.min(currLen, len)
	}
	return len
};
// @h code-end

test(findShortestSubArray, [[1,2,2,3,1,4,2]], 6)
test(findShortestSubArray, [[1,2,2,3,1]], 2)
