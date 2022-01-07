/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.26%)
 * Likes:    2197
 * Dislikes: 0
 * Total Accepted:    386.2K
 * Total Submissions: 499.7K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

const { test } = require('./utils')
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  /**
   * f(0) = 0
   * f(1) n = 1, ()
   * n = 2, ()(), (())
   * n = 3, ((())), (()()), (())(), ()(()), ()()()
   * 其实就是找第n个括号在n-1的括号结果中可以放的位置
   * 括号可以放置的规则:
   * + 放在括号外(左和右)
   * + 放在括号中
   */
  // n = 1为基准
  function genBase (n, str = '') {
    if (!n) return str
    return genBase(n-1, str + '()')
  }

  function insert (str, position) {
    return str.substring(0, position+1) + '()' + str.substring(position+1)
  }
  function wrap (str) {
    return `(${str})`
  }
  // 有0, 所以n+1
  const dp = Array.from(new Array(n + 1), (v, i) => [genBase(i)])
  const reg = /\(\)/g
  function findPosition (num) {
    let pre
    if (num > 0) {
      pre = findPosition(num - 1)
    } else {
      return dp[0]
    }
    const res = []
    for (let str of pre) {
      let next
      while((next = reg.exec(str))) {
        console.log(next)
        res.push(insert(str, next.index))
      }
      const wrapped = wrap(str)
      
      !res.includes(wrapped) && res.push(wrapped)
    }
    dp[num].push(...res)
    return dp[num]
  }
  findPosition(n)
  return Array.from(new Set(dp[n])).reverse()
};
// @lc code=end

test(generateParenthesis,[1], ['()'])
test(generateParenthesis,[2], ['()()', '(())'])
test(generateParenthesis,[3], ["((()))","(()())","(())()","()(())","()()()"])