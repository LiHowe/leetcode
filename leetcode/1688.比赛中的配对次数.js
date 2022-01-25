/*
@h 2022-01-25 09:34:14
序号: 1688
名称: 比赛中的配对次数 | Count of Matches in Tournament
难度: Easy
标签: 数学 | 模拟
链接: https://leetcode-cn.com/problems/count-of-matches-in-tournament
题解: https://leetcode-cn.com/problems/count-of-matches-in-tournament/solution/

| 通过数量 | 总提交数 | 通过率 |
| 27.4K | 33.1K | 82.8% |

给你一个整数 n ，表示比赛中的队伍数。比赛遵循一种独特的赛制：


	如果当前队伍数是 偶数 ，那么每支队伍都会与另一支队伍配对。总共进行 n / 2 场比赛，且产生 n / 2 支队伍进入下一轮。
	如果当前队伍数为 奇数 ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 (n - 1) / 2 场比赛，且产生 (n - 1) / 2 + 1 支队伍进入下一轮。


返回在比赛中进行的配对次数，直到决出获胜队伍为止。

 

示例 1：

输入：n = 7
输出：6
解释：比赛详情：
- 第 1 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。
- 第 2 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
- 第 3 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
总配对次数 = 3 + 2 + 1 = 6


示例 2：

输入：n = 14
输出：13
解释：比赛详情：
- 第 1 轮：队伍数 = 14 ，配对次数 = 7 ，7 支队伍晋级。
- 第 2 轮：队伍数 = 7 ，配对次数 = 3 ，4 支队伍晋级。
- 第 3 轮：队伍数 = 4 ，配对次数 = 2 ，2 支队伍晋级。
- 第 4 轮：队伍数 = 2 ，配对次数 = 1 ，决出 1 支获胜队伍。
总配对次数 = 7 + 3 + 2 + 1 = 13


 

提示：


	1 <= n <= 200



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  // @h r-1 [脑残急转弯]
  let t = 0
  while (n > 1) {
    let r = n % 2
    t += (n - r) / 2
    n = (n - r) / 2 + r
  }
  return t
  // @h r-2 [脑筋急转弯]
  // return n - 1
};
// @h code-end
test(numberOfMatches, [7], 6)
test(numberOfMatches, [14], 13)
