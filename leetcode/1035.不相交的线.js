/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 *
 * https://leetcode-cn.com/problems/uncrossed-lines/description/
 *
 * algorithms
 * Medium (54.73%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    11.7K
 * Total Submissions: 19.5K
 * Testcase Example:  '[1,4,2]\n[1,2,4]'
 *
 * 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。
 * 
 * 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：
 * 
 * 
 * nums1[i] == nums2[j]
 * 且绘制的直线不与任何其他连线（非水平线）相交。
 * 
 * 
 * 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
 * 
 * 以这种方法绘制线条，并返回可以绘制的最大连线数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：nums1 = [1,4,2], nums2 = [1,2,4]
 * 输出：2
 * 解释：可以画出两条不交叉的线，如上图所示。 
 * 但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2
 * 的直线相交。
 * 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
 * 输出：3
 * 
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
 * 输出：2
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let line = 0
    const l1 = nums1.length
    const l2 = nums2.length
    let u = d = 0
    // 以较短数组作为上一行进行遍历
    for (; u < l1; u++) {
        let samePosition = -1
        for (; d < l2; d++) {
            if (nums1[u] === nums2[d]) {
                samePosition = d
                break
            }
        }
        // 如果有相同元素
        if (~samePosition) {
            // 如果间隔超过1, 即,中间区间元素可能有重复
            if (+(samePosition - u) > 1) {
                for (let i = u + 1; i < samePosition; i++) {
                    
                }
            }
        }
    }

    return line
};
// @lc code=end

test(maxUncrossedLines, [[2,3,4,5,6], [1,4,3,2,5,6]], 3)
test(maxUncrossedLines, [[1,2,3,4], [4,3,2,1]], 1)
test(maxUncrossedLines, [[1,2,3,4], [1,2,3,4]], 4)
test(maxUncrossedLines, [[1,3,7,1,7,5], [1,9,2,5,1]], 2)
test(maxUncrossedLines, [[1,4,2], [1,2,4]], 2)
test(maxUncrossedLines, [[1,4,2,1], [1,2,4,1]], 3)
test(maxUncrossedLines, [[3,3], [1,3,1,2,1]], 1)
test(maxUncrossedLines, [[1,3,1,2,1], [3,3]], 1)
test(maxUncrossedLines, [[1,1,2,1,2], [1,3,2,3,1]], 3)