/*
序号: 119
名称: 杨辉三角 II | Pascal's Triangle II
难度: Easy
标签: 数组 | 动态规划
链接: https://leetcode-cn.com/problems/pascals-triangle-ii
题解: https://leetcode-cn.com/problems/pascals-triangle-ii/solution/
数学乐: https://www.shuxuele.com/pascals-triangle.html
| 通过数量 | 总提交数 | 通过率 |
| 168.4K | 249.2K | 67.6% |

给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

<img alt="" src="https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif" />

 
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
 1 5 10 10 5 1
1 6 15 20 15 6 1



示例 1:


输入: rowIndex = 3
输出: [1,3,3,1]


示例 2:


输入: rowIndex = 0
输出: [1]


示例 3:


输入: rowIndex = 1
输出: [1,1]


 

提示:


	0 <= rowIndex <= 33


 

进阶：

你可以优化你的算法到 O(rowIndex) 空间复杂度吗？


*/

const { test } = require('./utils')
// lc-start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // 直接公式: C(n,i) = n!/(i!*(n-i)!)
  let cur = 1
  const res = new Array(rowIndex + 1)
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = Math.ceil(cur)
    cur = cur *  (rowIndex - i) / (i + 1)
  }
  return res
};
// lc-end

test(getRow, [3], [1,3,3,1])
test(getRow, [12], [1,12,66,220,495,792,924,792,495,220,66,12,1])
