/*
 * @lc app=leetcode.cn id=1442 lang=javascript
 *
 * [1442] 形成两个异或相等数组的三元组数目
 *
 * https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/description/
 *
 * algorithms
 * Medium (66.85%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    9.7K
 * Total Submissions: 13.2K
 * Testcase Example:  '[2,3,1,6,7]'
 *
 * 给你一个整数数组 arr 。
 * 
 * 现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。
 * 
 * a 和 b 定义如下：
 * 
 * 
 * a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
 * b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
 * 
 * 
 * 注意：^ 表示 按位异或 操作。
 * 
 * 请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：arr = [2,3,1,6,7]
 * 输出：4
 * 解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
 * 
 * 
 * 示例 2：
 * 
 * 输入：arr = [1,1,1,1,1]
 * 输出：10
 * 
 * 
 * 示例 3：
 * 
 * 输入：arr = [2,3]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 输入：arr = [1,3,5,7,9]
 * 输出：3
 * 
 * 
 * 示例 5：
 * 
 * 输入：arr = [7,11,12,9,5,2,7,17,22]
 * 输出：8
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= arr.length <= 300
 * 1 <= arr[i] <= 10^8
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let r = 0
    // 由题意a ==0 b可理解为 a^b === 0
    // 即实际解题条件为 arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1] ^ arr[j] ^ arr[j + 1] ^ ... ^ arr[k] === 0
    for (let i = 0, l = arr.length; i < l - 1; i++) {
        let sum = 0
        for (let k = i; k < l; k++) {
            // 找到位运算和为0的区间
            sum ^= arr[k]
            // 确保 0 <= i < j <= k < arr.length, 即 k > i, j可取的数量为 "除了i以外任意在(i, k]区间的数字"
            // 所以r的数量应该加 k - i
            if (!sum && k > i) r += (k-i)
        }
    }
    return r
};
// @lc code=end

// test(countTriplets, [[2,3,1,6,7]], 4)
test(countTriplets, [[1,1,1,1,1]], 10)
// test(countTriplets, [[2,3]], 0)
// test(countTriplets, [[1,3,5,7,9]], 3)
// test(countTriplets, [[7,11,12,9,5,2,7,17,22]], 8)