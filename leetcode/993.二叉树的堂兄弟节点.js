/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
 *
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (52.27%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 43.8K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 * 
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 输入：root = [1,2,3,4], x = 4, y = 3
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：root = [1,2,3,null,4], x = 2, y = 3
 * 输出：false
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 二叉树的节点数介于 2 到 100 之间。
 * 每个节点的值都是唯一的、范围为 1 到 100 的整数。
 * 
 * 
 * 
 * 
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const { test } = require('./utils')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let depth = 0
    let a, b 
    const seq = [[root, depth]]
    const find = (node, dep, parent) => {
        if (node.val === x) {
            a = {
                parent: parent,
                d: dep,
            }
        } else if (node.val === y) {
            b = {
                parent: parent,
                d: dep,
            }
        }
    }
    // bfs
    while(seq.length) {
        const [node, depth] = seq.shift()
        const d = depth + 1
        if (node.left) {
            seq.push([node.left, d])
            find(node.left, d, node.val)
        }
        if (node.right) {
            seq.push([node.right, d])
            find(node.right, d, node.val)
        }
        if (a && b) break
    }
    if (!a || !b) return false
    return a.parent !== b.parent && a.d === b.d
};
// @lc code=end

test(isCousins, [new TreeNode(1, new TreeNode(2, null, new TreeNode(4)),new TreeNode(3, null, new TreeNode(5))), 5, 4], true)


// dfs
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let deep = 0
    let a = {}, b = {}
    // dfs
    const loopFind = (node, d) => {
        if (node.left) {
            if (node.left.val === x) {
                a['parent'] = node.val
                a['deep'] = d
            } else if (node.left.val === y) {
                b['parent'] = node.val
                b['deep'] = d
            } else {
                loopFind(node.left, d+1)
            }
        }
        if (node.right) {
            if (node.right.val === x) {
                a['parent'] = node.val
                a['deep'] = d
            } else if (node.right.val === y) {
                b['parent'] = node.val
                b['deep'] = d
            } else {
                loopFind(node.right, d+1)
            }
        }
    }
    loopFind(root, deep)
    return a.parent !== b.parent && a.deep === b.deep
};