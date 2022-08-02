/*
@h 2022-07-29 09:18:00
序号: 593
名称: 有效的正方形 | Valid Square
难度: Medium
标签: 几何 | 数学
链接: https://leetcode-cn.com/problems/valid-square
题解: https://leetcode-cn.com/problems/valid-square/solution/

| 通过数量 | 总提交数 | 通过率 |
| 14.1K | 30.8K | 45.8% |

给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。

一个 有效的正方形 有四条等边和四个等角(90度角)。

 

示例 1:


输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True


示例 2:


输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
输出：false


示例 3:


输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
输出：true


 

提示:


	p1.length == p2.length == p3.length == p4.length == 2
	-104 <= xi, yi <= 104



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
	// 其中一个点到其他三个点中有两个距离相同
	function distance(p1, p2) {
		return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2
	}
	if (new Set([p1.join(''), p2.join(''), p3.join(''), p4.join('')]).size !== 4) return false
	const arr = []
	arr.push(distance(p1, p2))
	arr.push(distance(p1, p3))
	arr.push(distance(p1, p4))
	arr.push(distance(p2, p3))
	arr.push(distance(p2, p4))
	arr.push(distance(p3, p4))
	return new Set(arr).size === 2

};
// @h code-end

test(validSquare, [[1, 0], [-1, 0], [0, 1], [0, -1]], true)
test(validSquare, [[0, 0], [0, 0], [0, 0], [0, 0]], false)
test(validSquare, [[0, 0], [1, 1], [0, 0], [0, 0]], false)