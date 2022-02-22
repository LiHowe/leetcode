/*
@h 2022-02-22 11:01:19
序号: 461
名称: 汉明距离 | Hamming Distance
难度: Easy
标签: 位运算
链接: https://leetcode-cn.com/problems/hamming-distance
题解: https://leetcode-cn.com/problems/hamming-distance/solution/

| 通过数量 | 总提交数 | 通过率 |
| 189.9K | 233.4K | 81.4% |

两个整数之间的 <a href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB">汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

 

示例 1：


输入：x = 1, y = 4
输出：2
解释：
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。


示例 2：


输入：x = 3, y = 1
输出：1


 

提示：


	0 <= x, y <= 231 - 1



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // 1. 位运算
  let res = 0
  let xor = x ^ y // 异或运算 ⊕
  while (xor) {
    res += xor & 1
    xor >>>= 1
  }
  return res  
};
// @h code-end

test(hammingDistance, [3, 1], 1)
test(hammingDistance, [1, 4], 2)
/**
 *   1 0  <- 2
 * 1 0 0  <- 4
 * ------ 2 ^ 4
 * 1 1 0  <- 6
 */
test(hammingDistance, [2, 4], 2)