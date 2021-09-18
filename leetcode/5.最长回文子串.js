/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (33.55%)
 * Likes:    3576
 * Dislikes: 0
 * Total Accepted:    563.9K
 * Total Submissions: 1.7M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a"
 * 输出："a"
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 
 */
const { test } = require('./utils')
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
};
// @lc code=end


test(longestPalindrome, "babad", "bab | aba")
test(longestPalindrome, "cbbd", "bb")
test(longestPalindrome, "bbad", "bb")
test(longestPalindrome, "badd", "dd")
test(longestPalindrome, "a", "a")
test(longestPalindrome, "ac", "a")
test(longestPalindrome, "acbabacdecccedaabskea", "deccced")