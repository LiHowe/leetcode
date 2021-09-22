/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 *
 * https://leetcode-cn.com/problems/split-linked-list-in-parts/description/
 *
 * algorithms
 * Medium (56.26%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    35.4K
 * Total Submissions: 59.2K
 * Testcase Example:  '[1,2,3]\n5'
 *
 * 给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。
 * 
 * 每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。
 * 
 * 这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。
 * 
 * 返回一个由上述 k 部分组成的数组。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3], k = 5
 * 输出：[[1],[2],[3],[],[]]
 * 解释：
 * 第一个元素 output[0] 为 output[0].val = 1 ，output[0].next = null 。
 * 最后一个元素 output[4] 为 null ，但它作为 ListNode 的字符串表示是 [] 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2,3,4,5,6,7,8,9,10], k = 3
 * 输出：[[1,2,3,4],[5,6,7],[8,9,10]]
 * 解释：
 * 输入被分成了几个连续的部分，并且每部分的长度相差不超过 1 。前面部分的长度大于等于后面部分的长度。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 1000]
 * 0 <= Node.val <= 1000
 * 1 <= k <= 50
 * 
 * 
 */

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

const { test, generateLinkedList } = require('./utils')
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  if (!head || head.val === null ) return new Array(k).fill(null)
  const arr = []
  // 链表转为数组
  let node = head
  while(node && node.val !== null) {
    arr.push(node.val)
    node = node.next
  }
  console.log('arr is', arr)
  // 计算并分配长度, 向上取整
  const eachLength = Math.floor(arr.length / k)
  // 取余数
  let rest = arr.length % k
  console.log('each length is', eachLength, 'rest is', rest)

  const generateLinkedList = (arr) => {
    if (!arr || !arr.length) return null
    let start = 0
    function loop(s) {
      if (s === arr.length) return null
      const node = new ListNode(arr[s], loop(s + 1))
      return node
    }
    return loop(start)
  }
  // 分配节点
  const res = []
  while (k) {
    const spliceNum = rest ? eachLength + 1 : eachLength
    res.push(generateLinkedList(arr.splice(0, spliceNum)))
    k && k--
    rest && rest--
  }
  return res
};
// @lc code=end

// test(splitListToParts, [generateLinkedList([1,2,3]), 5], [[1],[2],[3],[],[]])
// test(splitListToParts, [generateLinkedList([1,2,3,4,5,6,7,8,9,10]), 3], [[1,2,3,4],[5,6,7],[8,9,10]])
// test(splitListToParts, [generateLinkedList([]), 3], [[],[],[]])
test(splitListToParts, [generateLinkedList([0]), 1], [[0]])