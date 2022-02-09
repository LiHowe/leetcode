/*
@h 2022-02-08 09:20:18
序号: 1001
名称: 网格照明 | Grid Illumination
难度: Hard
标签: 数组 | 哈希表
链接: https://leetcode-cn.com/problems/grid-illumination
题解: https://leetcode-cn.com/problems/grid-illumination/solution/

| 通过数量 | 总提交数 | 通过率 |
| 3.8K | 10.3K | 36.6% |

在大小为 n x n 的网格 grid 上，每个单元格都有一盏灯，最初灯都处于 关闭 状态。

给你一个由灯的位置组成的二维数组 lamps ，其中 lamps[i] = [rowi, coli] 表示 打开 位于 grid[rowi][coli] 的灯。即便同一盏灯可能在 lamps 中多次列出，不会影响这盏灯处于 打开 状态。

当一盏灯处于打开状态，它将会照亮 自身所在单元格 以及同一 行 、同一 列 和两条 对角线 上的 所有其他单元格 。

另给你一个二维数组 queries ，其中 queries[j] = [rowj, colj] 。对于第 j 个查询，如果单元格 [rowj, colj] 是被照亮的，则查询结果为 1 ，否则为 0 。在第 j 次查询之后 [按照查询的顺序] ，关闭 位于单元格 grid[rowj][colj] 上及相邻 8 个方向上（与单元格 grid[rowi][coli] 共享角或边）的任何灯。

返回一个整数数组 ans 作为答案， ans[j] 应等于第 j 次查询 queries[j] 的结果，1 表示照亮，0 表示未照亮。

 

示例 1：
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/illu_1.jpg" style="height: 209px; width: 750px;" />

输入：n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
输出：[1,0]
解释：最初所有灯都是关闭的。在执行查询之前，打开位于 [0, 0] 和 [4, 4] 的灯。第 0 次查询检查 grid[1][1] 是否被照亮（蓝色方框）。该单元格被照亮，所以 ans[0] = 1 。然后，关闭红色方框中的所有灯。
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/illu_step1.jpg" style="height: 218px; width: 500px;" />
第 1 次查询检查 grid[1][0] 是否被照亮（蓝色方框）。该单元格没有被照亮，所以 ans[1] = 0 。然后，关闭红色矩形中的所有灯。
<img alt="" src="https://assets.leetcode.com/uploads/2020/08/19/illu_step2.jpg" style="height: 219px; width: 500px;" />


示例 2：


输入：n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
输出：[1,1]


示例 3：


输入：n = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
输出：[1,1,0]


 

提示：


	1 <= n <= 109
	0 <= lamps.length <= 20000
	0 <= queries.length <= 20000
	lamps[i].length == 2
	0 <= rowi, coli < n
	queries[j].length == 2
	0 <= rowj, colj < n



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function(n, lamps, queries) {
	const LIGHT = 2
	const hash = (row, col) => `${row}_${col}`

	// n * n 的网格
	const grid = new Array(n).fill(0).map(() => new Array(n).fill(0))
	const light = {}
	// 亮灯的位置
	lamps.forEach(([row, col]) => {
		console.log('toggle', { row, col })
		toggle(row, col, true)
	})
	console.log(grid, light)
	// 查询的结果
	const ans = []
	// 遍历查询的结果
	queries.forEach(q => {
		// 查询的位置
		const [row, col] = q
		// 当前位置的状态
		// 记录结果
		ans.push(grid[row][col] ? 1 : 0)
		// 变更状态
		query(row, col)
	})


	// 关灯, 并非直接设置0
	function query(row, col) {
		for (let i = row - 1; i <= row + 1; i++) {
			if (i < 0 || i >= n) continue
			for (let j = col - 1; j <= col + 1; j++) {
				if (j < 0 || j >= n) continue
				if (light[hash(i, j)]) {
					toggle(i, j, false)
					console.log('query', grid)
				}
			}
		}
	}

	function toggle(row, col, status) {
		// 灯设置为2
		grid[row][col] += status ? LIGHT : -LIGHT
		// 周围的灯
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (i === row && j === col) continue
				if ((i - row === j - col) || i === row || j === col) {
					grid[i][j] += status ? 1 : -1
				}
			}
		}
		// 记录灯
		light[hash(row, col)] = status
	}

	return ans
};
// @h code-end

// test(gridIllumination, [5, [[0,0],[4,4]], [[1,1],[1,0]]], [1,0])
// test(gridIllumination, [5, [[0,0],[4,4]], [[1,1],[1,1]]], [1,1])
// test(gridIllumination, [5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]]], [1,1,0])
test(gridIllumination, [
	6,
	[[2,5],[4,2],[0,3],[0,5],[1,4],[4,2],[3,3],[1,0]],
	[[4,3],[3,1],[5,3],[0,5],[4,4],[3,3]]
], [1,0,1,1,0,1])