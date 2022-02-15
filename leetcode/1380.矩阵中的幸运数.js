/*
@h 2022-02-15 09:40:52
序号: 1380
名称: 矩阵中的幸运数 | Lucky Numbers in a Matrix
难度: Easy
标签: 数组 | 矩阵
链接: https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
题解: https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/solution/

| 通过数量 | 总提交数 | 通过率 |
| 23.3K | 31K | 75.2% |

给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

幸运数是指矩阵中满足同时下列两个条件的元素：


	在同一行的所有元素中最小
	在同一列的所有元素中最大


 

示例 1：

输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
输出：[15]
解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。


示例 2：

输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
输出：[12]
解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。


示例 3：

输入：matrix = [[7,8],[1,2]]
输出：[7]


 

提示：


	m == mat.length
	n == mat[i].length
	1 <= n, m <= 50
	1 <= matrix[i][j] <= 10^5
	矩阵中的所有元素都是不同的



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
	// 结果
	const res = []
	// 最小值
	let min = Infinity
	const rows = matrix.length
	// 找到行最小值
	for (let r = 0; r < rows;r++) {
		// 行的最小值
		min = Math.min(...matrix[r])
		const idx = matrix[r].indexOf(min)
		if (isColMax(min, idx)) {
			res.push(min)
			min = Infinity
		}
	}
	// 是否是列最大值
	function isColMax(num, colIdx) {
		let max = num
		for (let r = 0; r < rows;r++) {
			max = Math.max(max, matrix[r][colIdx])
		}
		return max === num
	}
	return res
};
// @h code-end

test(luckyNumbers, [[[7,8],[1,2]]], [7])
test(luckyNumbers, [[[3,7,8],[9,11,13],[15,16,17]]], [15])
test(luckyNumbers, [[[1,10,4,2],[9,3,8,7],[15,16,17,12]]], [12])