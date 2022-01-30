/*
@h 2022-01-30 16:51:44
序号: 1287
名称: 有序数组中出现次数超过25%的元素 | Element Appearing More Than 25% In Sorted Array
难度: Easy
标签: 数组
链接: https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array
题解: https://leetcode-cn.com/problems/element-appearing-more-than-25-in-sorted-array/solution/

| 通过数量 | 总提交数 | 通过率 |
| 16.8K | 28K | 60.2% |

给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数

 

示例：


输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6


 

提示：


	1 <= arr.length <= 10^4
	0 <= arr[i] <= 10^5



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
	if (arr.length === 1) return arr[0]
	const l = arr.length
	const n = Math.floor(l / 4)	// 25%
	// 1. 哈希表
	// const map = {}
	// for (let i = 0; i < l; i++) {
	// 	map[arr[i]] = (map[arr[i]] || 0) + 1
	// }
	// console.log(map)
	// return Object.keys(map).find(num => map[num] > n)
	// 2.比较两端
	for (let i = 0; i < l; i++) {
		if (arr[i] === arr[i + n]) {
			return arr[i]
		}
	}
};
// @h code-end
test(findSpecialInteger, [[1]], 1)
test(findSpecialInteger, [[1,1]], 1)
test(findSpecialInteger, [[1,2,2]], 2)
test(findSpecialInteger, [[1,2,2,6,6,6,6,7,10]], 6)
test(findSpecialInteger, [[1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]], 12)