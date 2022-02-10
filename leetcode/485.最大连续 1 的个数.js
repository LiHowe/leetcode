/*
@h 2022-02-10 16:06:48
序号: 485
名称: 最大连续 1 的个数 | Max Consecutive Ones
难度: Easy
标签: 数组
链接: https://leetcode-cn.com/problems/max-consecutive-ones
题解: https://leetcode-cn.com/problems/max-consecutive-ones/solution/

| 通过数量 | 总提交数 | 通过率 |
| 137.2K | 225.3K | 60.9% |

给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

 

示例 1：


输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.


示例 2:


输入：nums = [1,0,1,1,0,1]
输出：2


 

提示：


	1 <= nums.length <= 105
	nums[i] 不是 0 就是 1.



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	// 1. 拼接字符串, 然后按0分隔找最长
	// return nums.join('').split('0').sort((a,b) => b.length - a.length)[0].length
	// 2. 暴力
	let c = 0
	let max = 0
	for (let n of nums) {
		if (n) {
			c++
		} else {
			max = Math.max(max, c)
			c = 0
		}
	}
	max = Math.max(max, c)
	return max
};
// @h code-end

// test(findMaxConsecutiveOnes, [[1,0,1,1,0,1]], 2)
test(findMaxConsecutiveOnes, [[1,1,0,1,1,1]], 3)
// test(findMaxConsecutiveOnes, [[1,0,0,1,0,1]], 1)