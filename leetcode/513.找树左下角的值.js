/*
@h 2022-06-22 15:39:25
序号: 513
名称: 找树左下角的值 | Find Bottom Left Tree Value
难度: Medium
标签: 树 | 深度优先搜索 | 广度优先搜索 | 二叉树
链接: https://leetcode-cn.com/problems/find-bottom-left-tree-value
题解: https://leetcode-cn.com/problems/find-bottom-left-tree-value/solution/

| 通过数量 | 总提交数 | 通过率 |
| 111.8K | 150.9K | 74.1% |

给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

 

示例 1:

<img src="https://assets.leetcode.com/uploads/2020/12/14/tree1.jpg" style="width: 182px; " />


输入: root = [2,1,3]
输出: 1


示例 2:

<img src="https://assets.leetcode.com/uploads/2020/12/14/tree2.jpg" style="width: 242px; " />


输入: [1,2,3,4,null,5,6,null,null,7]
输出: 7


 

提示:


	二叉树的节点个数的范围是 [1,104]
	<meta charset="UTF-8" />-231 <= Node.val <= 231 - 1 



*/

const { test, TreeNode } = require('./utils')
// @h code-start
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {

};
// @h code-end
