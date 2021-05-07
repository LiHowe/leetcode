/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (36.69%)
 * Likes:    5410
 * Dislikes: 0
 * Total Accepted:    976.5K
 * Total Submissions: 2.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: s = ""
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * s 由英文字母、数字、符号和空格组成
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 穷举 -- 2021/05/07
    const l = s.length
    if(l < 2) return l
    let substr = ''
    let maxLength = 0
    for(let i = 0;i < l - 1; i++) {
        substr = s[i]
        for(let j = i + 1; j < l; j++) {
            // 如果不存在当前字符
            if (!substr.includes(s[j])) {
                substr += s[j]
                maxLength = Math.max(substr.length, maxLength)
            } else {
                break
            }
        }
    }
    maxLength = Math.max(substr.length, maxLength)
    return maxLength
};
// @lc code=end

test(lengthOfLongestSubstring, 'aab', 2)
test(lengthOfLongestSubstring, 'abcabcbb', 3)
test(lengthOfLongestSubstring, 'bbbbb', 1)
test(lengthOfLongestSubstring, 'dvdf', 3)
test(lengthOfLongestSubstring, 'dvdf', 3)
