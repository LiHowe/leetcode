/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

const { test } = require('./utils')

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minus = x < 0
    minus && (x = -x)
    let str = `${x}`.split('')
    let reversedNum = +str.reverse().join('')
    if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < Math.pow(-2, 31)) {
        return 0
    } else {
        return reversedNum * (minus ? -1 : 1)
    }
};
// @lc code=end

test(reverse, [123], 321)
test(reverse, [-123], -321)
test(reverse, [120], 21)
test(reverse, [0], 0)