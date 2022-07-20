/*
@h 2022-07-20 09:23:35
序号: 1260
名称: 二维网格迁移 | Shift 2D Grid
难度: Easy
标签: 数组 | 矩阵 | 模拟
链接: https://leetcode-cn.com/problems/shift-2d-grid
题解: https://leetcode-cn.com/problems/shift-2d-grid/solution/

| 通过数量 | 总提交数 | 通过率 |
| 18.9K | 30.4K | 62.1% |

给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。

每次「迁移」操作将会引发下述活动：


	位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
	位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
	位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。

	每个元素向右移动
	每行最后一个元素移动到下一行开头
	矩阵最后一个元素(右下)移动到矩阵开始(左上)


请你返回 k 次迁移操作后最终得到的 二维网格。

 

示例 1：

<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/16/e1-1.png" style="height: 158px; width: 400px;" />


输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]


示例 2：

<img alt="" src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/16/e2-1.png" style="height: 166px; width: 400px;" />


输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]


示例 3：


输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]


 

提示：


	m == grid.length
	n == grid[i].length
	1 <= m <= 50
	1 <= n <= 50
	-1000 <= grid[i][j] <= 1000
	0 <= k <= 100



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
	let step = k % (grid.length * grid[0].length)
	if(!step) return grid

	const line = k % grid[0].length
	// 换行即可
	let num = Math.floor(k / grid[0].length)
	while(num) {
		grid.unshift(grid.pop())
		num--
	}
	if (!line) return grid

	step = k % grid[0].length
	let temp = []
	for (const line of grid) {
		line.unshift(...temp)
		temp = line.splice(line.length - step)
	}
	grid[0].unshift(...temp)
	return grid
};
// @h code-end

// test(shiftGrid, [[[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4], [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]])
// test(shiftGrid, [[[1,2,3],[4,5,6],[7,8,9]], 9], [[1,2,3],[4,5,6],[7,8,9]])
// test(shiftGrid, [[[1,2,3],[4,5,6],[7,8,9]], 1], [[9,1,2],[3,4,5],[6,7,8]])
test(
	shiftGrid,
	[
		[
			[-353,853,839,122,-337],
			[819,356,116,0,791],
			[-516,-502,-681,-427,-314],
			[-386,-400,597,740,836],
			[129,598,40,-875,-968],
			[495,-604,79,414,-104],
			[237,121,211,4,677],
			[-712,351,-947,-203,361]
		],7
	], [
		[4,677,-712,351,-947],
		[-203,361,-353,853,839],
		[122,-337,819,356,116],
		[0,791,-516,-502,-681],
		[-427,-314,-386,-400,597],
		[740,836,129,598,40],
		[-875,-968,495,-604,79],
		[414,-104,237,121,211]
	])