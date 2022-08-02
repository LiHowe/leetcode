/*
@h 2022-07-25 09:39:56
序号: 941
名称: 有效的山脉数组 | Valid Mountain Array
难度: Easy
标签: 数组
链接: https://leetcode-cn.com/problems/valid-mountain-array
题解: https://leetcode-cn.com/problems/valid-mountain-array/solution/

| 通过数量 | 总提交数 | 通过率 |
| 70.8K | 179.6K | 39.4% |

给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：


	arr.length >= 3
	在 0 < i < arr.length - 1 条件下，存在 i 使得：
	
		arr[0] < arr[1] < ... arr[i-1] < arr[i] 
		arr[i] > arr[i+1] > ... > arr[arr.length - 1]
	
	


 

<img alt="" src="https://assets.leetcode.com/uploads/2019/10/20/hint_valid_mountain_array.png" style="height: 316px; width: 500px;" />

 

示例 1：


输入：arr = [2,1]
输出：false


示例 2：


输入：arr = [3,5,5]
输出：false


示例 3：


输入：arr = [0,3,2,1]
输出：true

 

提示：


	1 <= arr.length <= 104
	0 <= arr[i] <= 104



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
	if (arr.length < 3) return false
	const l = arr.length
	let i = 0
	// 递增扫描
	while (i + 1 < l && arr[i] < arr[i + 1]) i++
	// 最高点不能是数组的第一个位置或最后一个位置
	if (i === 0 || i === l - 1) return false
	// 递减扫描
	while (i + 1 < l && arr[i] > arr[i + 1]) i++
	// 符合递增递减的个数应该等于除最大值外数组的长度
	return i === l - 1
};
// @h code-end

test(validMountainArray, [[0,3,2,1]], true)
test(validMountainArray, [[2,1]], false)
test(validMountainArray, [[3,5,5]], false)
test(validMountainArray, [[2,1,2]], false)
test(validMountainArray, [[3,3,3]], false)
test(validMountainArray, [[1,7,9,5,4,1,2]], false)
test(validMountainArray, [[0,1,2,3,4,5,6,7,8,9]], false)