/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (31.38%)
 * Likes:    3290
 * Dislikes: 0
 * Total Accepted:    495.7K
 * Total Submissions: 1.6M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 暴力解法 -- 循环查找 = 超时!!!
    // 数组小于3直接求和, 不为0即为不符合
    if (nums < 3) return []
    if (nums.length === 3) {
        const sum = nums.reduce((a, b) => a + b)
        return sum ? [] : [nums]
    }
    // 排序
    nums = nums.sort((a,b) => a - b)
    const res = []
    for (let i = 0, l = nums.length; i < l; i++) {
        // 可以换成双指针直接查找和为-nums[i]的j,k
        for (j = i + 1; j < l; j++) {
            const sum = nums[i] + nums[j]
            // find -sum
            for (k = j + 1; k < l; k++) {
                if (nums[k] === -sum) {
                    const temp = `${nums[i]},${nums[j]},${nums[k]}`
                    if (!res.includes(temp)) {
                        res.push(temp)
                    }
                    break
                };
            }
        } 
    }
    return res.map(item => item.split(',').map(Number))
};
// @lc code=end


test(threeSum, [[]], [])
test(threeSum, [[0]], [])
test(threeSum, [[1,2]], [])
test(threeSum, [[1,2,-3]], [[1,2,-3]])
test(threeSum, [[1,2,4]], [])
test(threeSum, [[-1,0,1,2,-1,-4]], [[-1,-1,2],[-1,0,1]])