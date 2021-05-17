/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (39.76%)
 * Likes:    6152
 * Dislikes: 0
 * Total Accepted:    822.5K
 * Total Submissions: 2.1M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个链表中的节点数在范围 [1, 100] 内
 * 0 
 * 题目数据保证列表表示的数字不含前导零
 * 
 * 
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const { test } = require('./utils')
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 猿人版
    /*
    if(!l1.next && !l2.next && l1.val === 0 && l2.val === 0) return new ListNode(l1.val + l2.val)
    let l1Arr = []
    let l2Arr = []

    const getSimpleArr = (ln, arr) => {
        arr.push(ln.val)
        if(ln.next) {
            getSimpleArr(ln.next, arr)
        }
        return arr
    }

    getSimpleArr(l1, l1Arr)
    getSimpleArr(l2, l2Arr)

    const l1Num = Number(l1Arr.reverse().join(''))
    const l2Num = Number(l2Arr.reverse().join(''))
    const sum = l1Num + l2Num
    let res = null
    // FIXME: 超长数字会变成科学计数法而出错
    sum.toLocaleString().replaceAll(',', '').split('').forEach(item => {
        if (!res) {
            res = new ListNode(item, null)
        } else {
            res = new ListNode(+item, res)
        }
    })
    return res
    */
   // 官方版
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};
// @lc code=end

const generateLn = (str) => {
    let res = null
    str.split('').forEach(item => {
        if (!res) {
            res = new ListNode(+item, null)
        } else {
            res = new ListNode(+item, res)
        }
    })
    return res
}

const l1 = generateLn('10000000000000000000000000000001')
const l2 = generateLn('564')


console.log(l1)
// const l1 = new ListNode(0)
// const l2 = new ListNode(0)

// console.log(JSON.stringify(addTwoNumbers(l1, l2)))

