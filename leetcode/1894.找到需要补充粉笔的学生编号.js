/*
 * @lc app=leetcode.cn id=1894 lang=javascript
 *
 * [1894] 找到需要补充粉笔的学生编号
 *
 * https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/description/
 *
 * algorithms
 * Medium (43.15%)
 * Likes:    23
 * Dislikes: 0
 * Total Accepted:    10.6K
 * Total Submissions: 22.8K
 * Testcase Example:  '[5,1,5]\n22'
 *
 * 一个班级里有 n 个学生，编号为 0 到 n - 1 。每个学生会依次回答问题，编号为 0 的学生先回答，然后是编号为 1 的学生，以此类推，直到编号为
 * n - 1 的学生，然后老师会重复这个过程，重新从编号为 0 的学生开始回答问题。
 * 
 * 给你一个长度为 n 且下标从 0 开始的整数数组 chalk 和一个整数 k 。一开始粉笔盒里总共有 k 支粉笔。当编号为 i
 * 的学生回答问题时，他会消耗 chalk[i] 支粉笔。如果剩余粉笔数量 严格小于 chalk[i] ，那么学生 i 需要 补充 粉笔。
 * 
 * 请你返回需要 补充 粉笔的学生 编号 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：chalk = [5,1,5], k = 22
 * 输出：0
 * 解释：学生消耗粉笔情况如下：
 * - 编号为 0 的学生使用 5 支粉笔，然后 k = 17 。
 * - 编号为 1 的学生使用 1 支粉笔，然后 k = 16 。
 * - 编号为 2 的学生使用 5 支粉笔，然后 k = 11 。
 * - 编号为 0 的学生使用 5 支粉笔，然后 k = 6 。
 * - 编号为 1 的学生使用 1 支粉笔，然后 k = 5 。
 * - 编号为 2 的学生使用 5 支粉笔，然后 k = 0 。
 * 编号为 0 的学生没有足够的粉笔，所以他需要补充粉笔。
 * 
 * 示例 2：
 * 
 * 输入：chalk = [3,4,1,2], k = 25
 * 输出：1
 * 解释：学生消耗粉笔情况如下：
 * - 编号为 0 的学生使用 3 支粉笔，然后 k = 22 。
 * - 编号为 1 的学生使用 4 支粉笔，然后 k = 18 。
 * - 编号为 2 的学生使用 1 支粉笔，然后 k = 17 。
 * - 编号为 3 的学生使用 2 支粉笔，然后 k = 15 。
 * - 编号为 0 的学生使用 3 支粉笔，然后 k = 12 。
 * - 编号为 1 的学生使用 4 支粉笔，然后 k = 8 。
 * - 编号为 2 的学生使用 1 支粉笔，然后 k = 7 。
 * - 编号为 3 的学生使用 2 支粉笔，然后 k = 5 。
 * - 编号为 0 的学生使用 3 支粉笔，然后 k = 2 。
 * 编号为 1 的学生没有足够的粉笔，所以他需要补充粉笔。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * chalk.length == n
 * 1 <= n <= 10^5
 * 1 <= chalk[i] <= 10^5
 * 1 <= k <= 10^9
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  // 暴力求解
  // while (k >= 0) {
  //   for (let i = 0, l = chalk.length; i < l; i++) {
  //     k -= chalk[i]
  //     console.log(`${i}使用粉笔${chalk[i]}个, 剩余${k}`)
  //     if (k < 0) return i
  //   }
  // }

  // 先算出一轮学生需要粉笔总数
  // function find() {
  //   for (let i = 0, l = chalk.length; i < l; i++) {
  //     k -= chalk[i]
  //     console.log(`${i}使用粉笔${chalk[i]}个, 剩余${k}`)
  //     if (k < 0) return i
  //   }
  // }
  // // 如果粉笔数量 < 学生需要粉笔数
  // if (k < roundSum) {
  //   return find()
  // } else if (k > roundSum) {
  //   // 如果粉笔数量 > 学生需要粉笔数, 取余
  //   k = k % roundSum
  //   console.log('一轮需要', roundSum ,'取余数', k)
  //   return find()
  // } else {
  //   return 0
  // }

  // 优化暴力求解
  const roundSum = chalk.reduce((a, b) => a + b)
  k = k % roundSum
  if (k === 0) return 0
  for (let i = chalk.length - 1; i >= 0; i--) {
    if ((k += chalk[i]) >= roundSum) return i
  }
};
// @lc code=end

test(chalkReplacer, [[3,4,1,2], 25], 1)
test(chalkReplacer, [[5,1,5], 22], 0)
test(chalkReplacer, [[5], 1], 0)
test(chalkReplacer, [[30,76,46,74,34,12,1,82,25,28,63,29,60,76,98,20,40,32,76,26,71],346237330], 19)