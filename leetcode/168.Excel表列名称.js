/*
@h 2022-07-18 10:00:14
序号: 168
名称: Excel表列名称 | Excel Sheet Column Title
难度: Easy
标签: 数学 | 字符串
链接: https://leetcode-cn.com/problems/excel-sheet-column-title
题解: https://leetcode-cn.com/problems/excel-sheet-column-title/solution/

| 通过数量 | 总提交数 | 通过率 |
| 112.4K | 257K | 43.7% |

给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：


A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...


 

示例 1：


输入：columnNumber = 1
输出："A"


示例 2：


输入：columnNumber = 28
输出："AB"


示例 3：


输入：columnNumber = 701
输出："ZY"


示例 4：


输入：columnNumber = 2147483647
输出："FXSHRXW"


 

提示：


	1 <= columnNumber <= 231 - 1



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
	const map = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	let res = ''
	while (columnNumber > 0) {
		columnNumber--
		res = map[columnNumber % 26] + res
		columnNumber = Math.floor(columnNumber / 26) 
	}
	return res
};
// @h code-end

test(convertToTitle, [1], 'A')
test(convertToTitle, [28], 'AB')
test(convertToTitle, [26], 'Z')
test(convertToTitle, [52], 'AZ')
test(convertToTitle, [701], 'ZY')
test(convertToTitle, [2147483647], 'FXSHRXW')