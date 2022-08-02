/*
@h 2022-07-27 09:19:19
序号: 592
名称: 分数加减运算 | Fraction Addition and Subtraction
难度: Medium
标签: 数学 | 字符串 | 模拟
链接: https://leetcode-cn.com/problems/fraction-addition-and-subtraction
题解: https://leetcode-cn.com/problems/fraction-addition-and-subtraction/solution/

| 通过数量 | 总提交数 | 通过率 |
| 8.5K | 15K | 57.0% |

给定一个表示分数加减运算的字符串 expression ，你需要返回一个字符串形式的计算结果。 

这个结果应该是不可约分的分数，即<a href="https://baike.baidu.com/item/%E6%9C%80%E7%AE%80%E5%88%86%E6%95%B0" target="_blank">最简分数。 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。所以在上述例子中, 2 应该被转换为 2/1。



示例 1:


输入: expression = "-1/2+1/2"
输出: "0/1"


 示例 2:


输入: expression = "-1/2+1/2+1/3"
输出: "1/3"


示例 3:


输入: expression = "1/3-1/2"
输出: "-1/6"


 

提示:


	输入和输出字符串只包含 '0' 到 '9' 的数字，以及 '/', '+' 和 '-'。 
	输入和输出分数格式均为 ±分子/分母。如果输入的第一个分数或者输出的分数是正数，则 '+' 会被省略掉。
	输入只包含合法的最简分数，每个分数的分子与分母的范围是  [1,10]。 如果分母是1，意味着这个分数实际上是一个整数。
	输入的分数个数范围是 [1,10]。
	最终结果的分子与分母保证是 32 位整数范围内的有效整数。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
	const operators = expression.match(/(?<=\d)[+-](?=\d)/g) // 操作符
	expression = expression.replace(/(?<=\d)[+-](?=\d)/g, ' ') // 替换操作符
	let members = expression.match(/[-]?\d+(?=\/)/g) // 分子
	const denominators = expression.match(/(?<=[\/])\d+/g) // 分母

	let de = denominators.reduce((a, b) => a/1 * b/1)
	members = members.map((x, i) => x/1 * de / denominators[i])
	let me = members[0]
	for (let i = 1; i < members.length; i++) {
		if (operators[i-1] === '+') {
			me += parseInt(members[i])
		} else {
			me -= parseInt(members[i])
		}
	}
	if (me === 0) return '0/1'
	if ((me && de) && (+(me % de) === 0)) return `${me / de}/1`
	const gcd = (a, b) => b ? gcd(b, a % b) : a
	const g = gcd(me, de)
	if (g) {
		me /= g
		de /= g
	}
	const prefix = `${de / me < 0 ? '-' : ''}`
	// 约分
	if ((me && de) && (de % me === 0)) return `${prefix}1/${Math.abs(de / me)}`
	return `${prefix}${Math.abs(me)}/${Math.abs(de)}`
};
// @h code-end
// 0.5 -> 5/10 0.333 ->  

// test(fractionAddition, ["-1/2+1/2"], "0/1")
// test(fractionAddition, ["-1/2+1/2+1/3"], "1/3")
// test(fractionAddition, ["-2/3-1/3"], "-1")
// test(fractionAddition, ["-2/3+1/3"], "-1/3")
// test(fractionAddition, ["5/3+1/3"], "2/1")
// test(fractionAddition, ["-5/2+10/3+7/9"], "29/18")
test(fractionAddition, ["2/5-1/1-2/1"], "-13/5")
