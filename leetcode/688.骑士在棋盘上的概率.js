/*
@h 2022-02-17 09:30:09
序号: 688
名称: 骑士在棋盘上的概率 | Knight Probability in Chessboard
难度: Medium
标签: 动态规划
链接: https://leetcode-cn.com/problems/knight-probability-in-chessboard
题解: https://leetcode-cn.com/problems/knight-probability-in-chessboard/solution/

| 通过数量 | 总提交数 | 通过率 |
| 11.5K | 21.2K | 54.2% |

在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。

象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/knight.png" style="height: 300px; width: 300px;" />

每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。

骑士继续移动，直到它走了 k 步或离开了棋盘。

返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。

 

示例 1：


输入: n = 3, k = 2, row = 0, column = 0
输出: 0.0625
解释: 有两步(到(1,2)，(2,1))可以让骑士留在棋盘上。
在每一个位置上，也有两种移动可以让骑士留在棋盘上。
骑士留在棋盘上的总概率是0.0625。


示例 2：


输入: n = 1, k = 0, row = 0, column = 0
输出: 1.00000


 

提示:


	1 <= n <= 25
	0 <= k <= 100
	0 <= row, column <= n



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
	// 偏移量
	const dirs = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
	// 构建棋盘
	const dp = new Array(k + 1).fill(0).map(
		() => new Array(n).fill(0).map(
			() => new Array(n).fill(0)
		)
	);
	// 循环步骤
	for (let step = 0; step <= k; step++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				// 第一步肯定在棋盘内
				if (step === 0) {
					dp[step][i][j] = 1;
				} else {
					// 循环向量
					for (const [x, y] of dirs) {
						const nx = i + x, ny = j + y
						if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
							dp[step][i][j] += dp[step - 1][nx][ny] / 8;
						}
					}
				}
			}
		}
	}
	return dp[k][row][column];
};
// @h code-end

test(knightProbability, [3,2,0,0], 0.0625)
test(knightProbability, [1,0,0,0], 1)