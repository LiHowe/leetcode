/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  // 思路: 
  // 1. 先按照字符串长度排序
  // 2. 判断是否有相同字母: new set(), length等于字符串长度相加即没有 (注意: 单个字符串内可能含有重复字母)
  let res = 0
  words.sort((a, b) => b.length - a.length)
  function unique (str1, str2) {
    const str1Set = new Set(str1.split(''))
    const str2Set = new Set(str2.split(''))
    const sum = str1Set.size + str2Set.size
    return new Set([...str1Set,...str2Set]).size === sum
  }
  for (let i = 0, l = words.length; i < l - 1; i++) {
    for (let j = i + 1;j < l; j++) {
      console.log('current is:', words[i], words[j])
      if (unique(words[i], words[j])) {
        res = Math.max(res, words[i].length * words[j].length)
      }
    }
  }
  return res
};
// @lc code=end

// test(maxProduct, [["abcw","baz","foo","bar","xtfn","abcdef"]], 16)
// test(maxProduct, [["a","ab","abc","d","cd","bcd","abcd"]], 4)
test(maxProduct, [["eae","ea","aaf","bda","fcf","dc","ac","ce","cefde","dabae"]], 15)