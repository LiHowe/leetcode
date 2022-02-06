/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (50.61%)
 * Likes:    10939
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 3.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2
 * -10^9
 * -10^9
 * 只会存在一个有效答案
 *
 *
 */
import { test } from './utils.js'
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const res = []
    for(let i = 0, l = nums.length; i < l; i++) {
        // 剩余值
        const rest = target - nums[i]
        // 查找剩余值
        for(let j = i + 1; j < l; j++) {
            if (nums[j] === rest) {
                res.push(i, j)
                break
            }
        }
        if (res.length === 2) break
    }
    return res
};
// @lc code=end

// test(twoSum, [[2,7,11,15], 9], [0,1])
// test(twoSum, [[3,2,4], 6], [1,2])
// test(twoSum, [[3,3], 6], [0,1])
test(twoSum, [[2,5,5,11], 10], [1,2])
