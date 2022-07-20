/*
@h 2022-07-13 10:00:58
序号: 735
名称: 行星碰撞 | Asteroid Collision
难度: Medium
标签: 栈 | 数组
链接: https://leetcode-cn.com/problems/asteroid-collision
题解: https://leetcode-cn.com/problems/asteroid-collision/solution/

| 通过数量 | 总提交数 | 通过率 |
| 36.2K | 85.5K | 42.3% |

给定一个整数数组 asteroids，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。



示例 1：


输入：asteroids = [5,10,-5]
输出：[5,10]
解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。

示例 2：


输入：asteroids = [8,-8]
输出：[]
解释：8 和 -8 碰撞后，两者都发生爆炸。

示例 3：


输入：asteroids = [10,2,-5]
输出：[10]
解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。



提示：


	2 <= asteroids.length <= 104
	-1000 <= asteroids[i] <= 1000
	asteroids[i] != 0



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  // const res = []
  // let temp = null
  // for (let i = 0, l = asteroids.length; i < l; i++) {
  //   const curr = asteroids[i]
  //   /**
  //    * 如果同方向， 则比较与下一个的大小，如果小则放入res
  //    * 如果大则跳过下一个
  //    * 如果下一个与当前反向，比较绝对值大小，
  //    * 如果下一个的绝对值大， 则将res全部召回重新比较
  //    */
  //   if (!temp) {
  //     temp = curr
  //     res.push(temp)
  //     continue
  //   }

  //   if (curr + temp === 0) {
  //     temp = null
  //     i++
  //     continue
  //   }

  //   // 与上一个反向
  //   if (curr < 0 && temp > 0) {
  //     // 如果当前比上一个要大
  //     if (+curr > temp) {
  //       // 拉回来重新比较
  //       res.push(curr)
  //       res = asteroidCollision(res)
  //     }
  //     continue
  //   }

  //   // 与上一个同方向, 且比上一个大
  //   if (curr > temp) {
  //     res.push(curr)
  //   }
  // }
  // return res
  const res = []
  for (const t of asteroids) {
      let flag = true
      while (flag && res.length > 0 && res[res.length - 1] > 0 && t < 0) {
          const a = res[res.length - 1], b = -t
          if (a <= b) res.pop()
          if (a >= b) flag = false
      }
      if (flag) res.push(t)
  }
  return res
};
// @h code-end

test(asteroidCollision, [[5,10,-5]], [5, 10])
test(asteroidCollision, [[8,-8]], [])
test(asteroidCollision, [[8,-8, 1]], [1])
test(asteroidCollision, [[10,2,-5, -1]], [10])
