/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 *
 * https://leetcode-cn.com/problems/132-pattern/description/
 *
 * algorithms
 * Medium (29.58%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    18.7K
 * Total Submissions: 62.1K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak <
 * aj。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。
 * 
 * 注意：n 的值小于15000。
 * 
 * 示例1:
 * 
 * 
 * 输入: [1, 2, 3, 4]
 * 
 * 输出: False
 * 
 * 解释: 序列中不存在132模式的子序列。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [3, 1, 4, 2]
 * 
 * 输出: True
 * 
 * 解释: 序列中有 1 个132模式的子序列： [1, 4, 2].
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: [-1, 3, 2, 0]
 * 
 * 输出: True
 * 
 * 解释: 序列中有 3 个132模式的的子序列: [-1, 3, 2], [-1, 3, 0] 和 [-1, 2, 0].
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    if (nums.length < 3) return false
    // 暴力查找
    for (let start = 0; start < nums.length - 3; start++) {
        console.log('start is', start)
        for(let next = start + 1; next < nums.length - 1; next++) {
            console.log('next is', next)
            if (nums[start] < nums[next]) {
                console.log('next fit')
                for (let end = next + 1; end < nums.length - 1; end++) {
                    console.log('end is', end)
                    if (nums[end] < nums[next] && nums[end] > nums[start]) {
                        return true
                    }
                }
            }
        }
    }
    return false
};
// @lc code=end

console.log(find132pattern([3,1,4,2]))
