/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 *
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/description/
 *
 * algorithms
 * Medium (47.33%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    46.5K
 * Total Submissions: 96.6K
 * Testcase Example:  '"abpcplea"\n["ale","apple","monkey","plea"]'
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
 * 
 * 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * 输出："apple"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abpcplea", dictionary = ["a","b","c"]
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * s 和 dictionary[i] 仅由小写英文字母组成
 * 
 * 
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
  let res = "";
    for (const t of dictionary) {
        let i = 0, j = 0;
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                ++i;
            }
            ++j;
        }
        if (i === t.length) {
            if (t.length > res.length || (t.length === res.length && t < res)) {
                res = t;
            }
        }
    }
    return res;
  // 思路2: 建立每个字母出现次数map, 然后循环字典进行筛选, 然后排序
};
// @lc code=end

test(findLongestWord, ["abpcplea",["ale","apple","monkey","plea"]], 'apple')
test(findLongestWord, ["abpcplea",["a","b","c"]], 'a')
test(findLongestWord, [
  "abce",
  ["abe", "abc"]
], 'abc')
test(findLongestWord, [
  "abpcplea",
  ["ale","apple","monkey","plea", "abpcplaaa","abpcllllll","abccclllpppeeaaaa"]
], 'apple')
test(findLongestWord, [
  "bab",
  ["ba","ab","a","b"]
], 'ab')
test(findLongestWord, [
  "aewfafwafjlwajflwajflwafj",
["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"]
], "ewaf")