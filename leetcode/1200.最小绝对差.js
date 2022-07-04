/*
@h 2022-07-04 14:37:08
序号: 1200
名称: 最小绝对差 | Minimum Absolute Difference
难度: Easy
标签: 数组 | 排序
链接: https://leetcode-cn.com/problems/minimum-absolute-difference
题解: https://leetcode-cn.com/problems/minimum-absolute-difference/solution/

| 通过数量 | 总提交数 | 通过率 |
| 37.5K | 51.8K | 72.5% |

给你个整数数组 arr，其中每个元素都 不相同。

请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。



示例 1：

输入：arr = [4,2,1,3]
输出：[[1,2],[2,3],[3,4]]


示例 2：

输入：arr = [1,3,6,10,15]
输出：[[1,3]]


示例 3：

输入：arr = [3,8,-10,23,19,-4,-14,27]
输出：[[-14,-10],[19,23],[23,27]]




提示：


	2 <= arr.length <= 10^5
	-10^6 <= arr[i] <= 10^6



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  if (arr.length === 2) return [arr]
  // 先排序再两两判断
  arr.sort((a, b) => a - b)
  let res = []
  let n = Infinity
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    const diff = Math.abs(arr[i] - arr[i+1])
    if (diff < n) {
      n = diff
      res = [[arr[i], arr[i+1]]]
    } else if (diff === n) {
      res.push([arr[i], arr[i+1]])
    }
  }
  return res
};
// @h code-end

test(minimumAbsDifference, [[3,8,-10,23,19,-4,-14,27]], [[-14,-10],[19,23],[23,27]])
