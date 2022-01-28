/*
@h 2022-01-28 11:12:21
序号: 1996
名称: 游戏中弱角色的数量 | The Number of Weak Characters in the Game
难度: Medium
标签: 栈 | 贪心 | 数组 | 排序 | 单调栈
链接: https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game
题解: https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game/solution/

| 通过数量 | 总提交数 | 通过率 |
| 11K | 32.9K | 33.6% |

你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御 。给你一个二维整数数组 properties ，其中 properties[i] = [attacki, defensei] 表示游戏中第 i 个角色的属性。

如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色 
更正式地，如果认为角色 i 弱于 存在的另一个角色 j ，那么 attackj > attacki 且 defensej > defensei 。

返回 弱角色 的数量。

 

示例 1：


输入：properties = [[5,5],[6,3],[3,6]]
输出：0
解释：不存在攻击和防御都严格高于其他角色的角色。


示例 2：


输入：properties = [[2,2],[3,3]]
输出：1
解释：第一个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。


示例 3：


输入：properties = [[1,5],[10,4],[4,3]]
输出：1
解释：第三个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。


 

提示：


	2 <= properties.length <= 105
	properties[i].length == 2
	1 <= attacki, defensei <= 105



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function(properties) {
	// 1. 超时解法
	// const l = properties.length
	// let res = 0
	// for (let i = 0; i < l; i++) {
	// 	const [attacki, defensei] = properties[i]
	// 	for (let j = 0; j < l; j++) {
	// 		if (i === j) continue
	// 		const [attackj, defensej] = properties[j]
	// 		// 确认i是否是弱角色
	// 		if (attackj > attacki && defensej > defensei) {
	// 			res++
	// 			break
	// 		}
	// 	}
	// }
	// return res

	// 2. 按攻击力降序排序
	properties.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
	let res = 0
	let max = -1
	for (let i = 0; i < properties.length; i++) {
		const [_, defensei] = properties[i]
		if (max > defensei) {
			res++
		} else {
			max = defensei
		}
	}
	return res
};
// @h code-end

test(numberOfWeakCharacters, [[[1,2],[3,4],[5,6]]], 2)
test(numberOfWeakCharacters, [[[1,5],[10,4],[4,3]]], 1)
test(numberOfWeakCharacters, [[[2,2],[3,3]]], 1)
test(numberOfWeakCharacters, [[[5,5],[6,3],[3,6]]], 0)
test(numberOfWeakCharacters, [[[7,9],[10,7],[6,9],[10,4],[7,5],[7,10]]], 2)
test(numberOfWeakCharacters, [[[7,7],[1,2],[9,7],[7,3],[3,10],[9,8],[8,10],[4,3],[1,5],[1,5]]], 6)