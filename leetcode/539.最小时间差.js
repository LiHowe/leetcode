/*
序号: 539
名称: 最小时间差 | minimum-time-difference
难度: Medium
标签: 数组 | 数学 | 字符串 | 排序
链接: https://leetcode-cn.com/problems/minimum-time-difference
题解: https://leetcode-cn.com/problems/minimum-time-difference/solution/

给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 

示例 1：


输入：timePoints = ["23:59","00:00"]
输出：1


示例 2：


输入：timePoints = ["00:00","23:59","00:00"]
输出：0


 

提示：


	2 <= timePoints <= 2 * 104
	timePoints[i] 格式为 "HH:MM"



*/

const { test } = require('./utils')
// lc-start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  // 超出1440个用例肯定有重复的, 提升用例测试效率(鸡贼)
  if (timePoints.length > 1440) return 0
  // 转换为分钟
  function toM(t) {
    const [h, m] = t.split(':')
    return (+h || 24) * 60 + +m
  }
  // 按分钟排序
  timePoints.sort((a, b) => toM(a) - toM(b))
  // 找到最小差
  let gap = Infinity
  for (let i = 1, l = timePoints.length; i < l; i++) {
    const t1 = toM(timePoints[i-1])
    const t2 = toM(timePoints[i])
    gap = Math.min(Math.abs(t1 - t2), gap)
  }
  // 24小时头尾再比较一下
  return Math.min(
    gap,
    +(toM(timePoints[0]) + 1440 - toM(timePoints[timePoints.length - 1]))
  )
};
// lc-end

test(findMinDifference, [["00:00","23:59","23:58", "00:02"]], 1, true)
test(findMinDifference, [["23:59","00:00"]], 1, true)
test(findMinDifference, [["00:00","23:59","00:00"]], 0, true)
test(findMinDifference, [["12:12","00:13"]], 719, true)
test(findMinDifference, [["01:39","10:26","21:43"]], 236, true)
