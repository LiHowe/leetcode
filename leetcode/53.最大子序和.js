/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (53.62%)
 * Likes:    3168
 * Dislikes: 0
 * Total Accepted:    492.2K
 * Total Submissions: 911.3K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^5 
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) {
        const sum = nums[0] + nums[1]
        const max = Math.max(...nums)
        return sum > max ? sum : max
    }
    // 找到最大的数, 最大的连续子数组之和肯定大于等于该数字
    let max = Math.max(...nums)
    // 双指针
    let start = 0, end = 1
    // 从头开始遍历数组
    for (let i = 0, l = nums.length; i < l;) {
        let sum = nums[i]
        for (let j = i + 1; j < l;) {
            sum += nums[j]
            if (sum >= max) {
                max = sum
                start = i
                end = j
            }
            j++
        }
        i++
    }
    return max
};
// @lc code=end
console.log('input [2,3,4,-1,-5,6]')
console.log('out put', maxSubArray([2,3,4,-1,-5,6]))
console.log('expect 9')

console.log('---------------------------------')

console.log('input [-2,1,-3,4,-1,2,1,-5,4]')
console.log('out put', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('expect 6')

console.log('---------------------------------')

console.log('input [1,2]')
console.log('out put', maxSubArray([1,2]))
console.log('expect 3')

console.log('---------------------------------')

console.log('input [-5,-6]')
console.log('out put', maxSubArray([-5,-6]))
console.log('expect -5')