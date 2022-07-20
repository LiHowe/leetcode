/*
@h 2022-07-12 09:16:54
序号: 1252
名称: 奇数值单元格的数目 | Cells with Odd Values in a Matrix
难度: Easy
标签: 数组 | 数学 | 模拟
链接: https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix
题解: https://leetcode-cn.com/problems/cells-with-odd-values-in-a-matrix/solution/

| 通过数量 | 总提交数 | 通过率 |
| 23.2K | 30.6K | 75.9% |

给你一个 m x n 的矩阵，最开始的时候，每个单元格中的值都是 0。

另有一个二维索引数组 indices，indices[i] = [ri, ci] 指向矩阵中的某个位置，其中 ri 和 ci 分别表示指定的行和列（从 0 开始编号）。

对 indices[i] 所指向的每个位置，应同时执行下述增量操作：


	ri 行上的所有单元格，加 1 。
	ci 列上的所有单元格，加 1 。


给你 m、n 和 indices 。请你在执行完所有 indices 指定的增量操作后，返回矩阵中 奇数值单元格 的数目。



示例 1：

<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/06/e1.png" style="height: 118px; width: 600px;" />


输入：m = 2, n = 3, indices = [[0,1],[1,1]]
输出：6
解释：最开始的矩阵是 [[0,0,0],[0,0,0]]。
第一次增量操作后得到 [[1,2,1],[0,1,0]]。
最后的矩阵是 [[1,3,1],[1,3,1]]，里面有 6 个奇数。


示例 2：

<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/06/e2.png" style="height: 150px; width: 600px;" />


输入：m = 2, n = 2, indices = [[1,1],[0,0]]
输出：0
解释：最后的矩阵是 [[2,2],[2,2]]，里面没有奇数。




提示：


	1 <= m, n <= 50
	1 <= indices.length <= 100
	0 <= ri < m
	0 <= ci < n




进阶：你可以设计一个时间复杂度为 O(n + m + indices.length) 且仅用 O(n + m) 额外空间的算法来解决此问题吗？


*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
  // 行
  const rows = new Array(m).fill(0)
  // 列
  const cols = new Array(n).fill(0)
  // 计数
  /*
  m = 2, n = 2, indices = [[1,1],[0,0]]
  [0, 0]  ->   [0, 1]   ->    [1, 1]
  [0, 0]       [0, 1]         [1, 1]
   */
  for (const [r, c] of indices) {
    rows[r] ^= 1
    cols[c] ^= 1
  }
  const rSum = rows.reduce((a, b) => a + b)
  const cSum = cols.reduce((a, b) => a + b)

  return rSum * n + cSum * m - 2 * rSum * cSum
};
// @h code-end

test(oddCells, [2, 2, [[1,1],[0,0]]], 0)
test(oddCells, [2, 3, [[0,1],[1,1]]], 6)
