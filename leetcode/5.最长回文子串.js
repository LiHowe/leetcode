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
    const l = s.length
    if (l < 2) return s
    // 默认全部子串为回文串
    const dp = new Array(s.length).fill([false, false])

    let start, end = 0
    let len = 1

    for (let i = 1; i < l; i++) {
        for (j = 0; j < i; j++) {
            if (s.charAt(i) === s.charAt(j) && (i - j <= 2 || dp[j+1][i-1])) {
                dp[j][i] = true
                if (i - j + 1 > len) {
                    len = i - j + 1
                    start = j
                    end = i
                }
            }
        }
    }
    // console.log(dp)
    return s.substr(start, end+1)

    // if (s.length === 1) return s
    // if (s.length === 2) {
    //     if (s.charAt(0) === s.charAt(1)) {
    //         return s
    //     } else {
    //         return s.charAt(0)
    //     }
    // }
    // // 检验是否对称
    // function isSymmetry(s) {
    //     let res = true
    //     for (let i = 0, l = Math.floor(s.length / 2); i < l; i++) {
    //         res = s.charAt(i) === s.charAt(s.length - 1 - i)
    //         if (!res) break
    //     }
    //     return res
    // }
    // let res
    // let step = 1
    // for(let start = 0, l = s.length, end = l; start < end;) {
    //     const target = s.substr(start, end)
    //     console.log('test target:', target)
    //     if (isSymmetry(target)) {
    //         res = target
    //         break
    //     }
    //     !(step % 2) ? start++ : end--
    //     step++
    // }
    // return res
};
// @lc code=end


// test(longestPalindrome, "babad", "bab | aba")
test(longestPalindrome, "cbbd", "bb")
// test(longestPalindrome, "bbad", "bb")
// test(longestPalindrome, "badd", "dd")
// test(longestPalindrome, "a", "a")
// test(longestPalindrome, "ac", "a")