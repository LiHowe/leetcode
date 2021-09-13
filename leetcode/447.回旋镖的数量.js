/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Medium (60.40%)
 * Likes:    162
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 40.8K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组
 * ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 返回平面上所有回旋镖的数量。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：points = [[0,0],[1,0],[2,0]]
 * 输出：2
 * 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：points = [[1,1]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == points.length
 * 1 
 * points[i].length == 2
 * -10^4 i, yi 
 * 所有点都 互不相同
 * 
 * 
 */

const { test } = require('./utils')

const getDistance = (p1, p2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  return (x1 - x2) ** 2 + (y1 - y2) ** 2
}

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  // 找到 x - x1 + y - y1 
  let answer = 0
  if (points.length <= 2) return 0
  points.forEach((p1, i) => {
    let map = {}
    points.forEach((p2, j) => {
      if (i !== j) {
        const d = getDistance(p1, p2)
        map[d] = (map[d] || 0) + 1
      }
    })
    Object.values(map).forEach(item => {
      answer += item * (item - 1)
    })
  })
  return answer
};
// @lc code=end

// Math.sqrt 开根号

test(numberOfBoomerangs, [[[0,0],[1,0],[2,0]]], 2)
test(numberOfBoomerangs, [[[0,0],[1,0],[2,0],[3,0],[4,0]]], 8)