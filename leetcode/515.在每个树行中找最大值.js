/*
@h 2022-06-24 09:16:15
序号: 515
名称: 在每个树行中找最大值 | Find Largest Value in Each Tree Row
难度: Medium
标签: 树 | 深度优先搜索 | 广度优先搜索 | 二叉树
链接: https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
题解: https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/solution/

| 通过数量 | 总提交数 | 通过率 |
| 70.3K | 106.4K | 66.1% |

给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

 

示例1：

<img alt="" src="https://assets.leetcode.com/uploads/2020/08/21/largest_e1.jpg" style="height: 172px; width: 300px;" />


输入: root = [1,3,2,5,3,null,9]
输出: [1,3,9]


示例2：


输入: root = [1,2,3]
输出: [1,3]


 

提示：


	二叉树的节点个数的范围是 [0,104]
	<meta charset="UTF-8" />-231 <= Node.val <= 231 - 1


 


*/

const { test } = require('./utils')
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
 * @return {number[]}
 */
var largestValues = function(root) {

};
// @h code-end