/*
@h 2022-02-07 09:32:47
序号: 1405
名称: 最长快乐字符串 | Longest Happy String
难度: Medium
标签: 贪心 | 字符串 | 堆（优先队列）
链接: https://leetcode-cn.com/problems/longest-happy-string
题解: https://leetcode-cn.com/problems/longest-happy-string/solution/

| 通过数量 | 总提交数 | 通过率 |
| 8.4K | 15.2K | 55.1% |

如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。

给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：


	s 是一个尽可能长的快乐字符串。
	s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
	s 中只含有 'a'、'b' 、'c' 三种字母。


如果不存在这样的字符串 s ，请返回一个空字符串 ""。



示例 1：

输入：a = 1, b = 1, c = 7
输出："ccaccbcc"
解释："ccbccacc" 也是一种正确答案。


示例 2：

输入：a = 2, b = 2, c = 1
输出："aabbc"


示例 3：

输入：a = 7, b = 1, c = 0
输出："aabaa"
解释：这是该测试用例的唯一正确答案。



提示：


	0 <= a, b, c <= 100
	a + b + c > 0



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
  // 以最大数量进行循环
  let res = ''
  const arr = [[a, 'a'], [b, 'b'], [c, 'c']]

  while (true) {
    // 按字符数量多-> 少排序， 每次循环都要排序
    arr.sort((a, b) => b[0] - a[0])
    let flag = false
    for (const [idx, [rest, char]] of arr.entries()) {
      if (rest <= 0) break
      const l = res.length
      // 当前字符与结果的前两个字符做比较， 相同则不继续添加
      if (l >= 2 && res[l - 2] === char && res[l - 1] === char) continue
      flag = true
      res += char
      arr[idx][0]--
      break
    }
    if (!flag) break
  }
  return res
};
// @h code-end

test(longestDiverseString, [7,1,0], 'aabaa')
test(longestDiverseString, [7,3,2], 'aabaabaabacc')
test(longestDiverseString, [7,3,3], 'aabaabaabccac')
