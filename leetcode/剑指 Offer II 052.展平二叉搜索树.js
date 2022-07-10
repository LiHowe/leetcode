/*
@h 2022-07-10 01:37:53
序号: 剑指 Offer II 052
名称: 展平二叉搜索树 | 展平二叉搜索树
难度: Easy
标签: 栈 | 树 | 深度优先搜索 | 二叉搜索树 | 二叉树
链接: https://leetcode-cn.com/problems/NYBBNL
题解: https://leetcode-cn.com/problems/NYBBNL/solution/

| 通过数量 | 总提交数 | 通过率 |
| 18.2K | 24.3K | 74.7% |

给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

 

示例 1：

<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/ex1.jpg" style="width: 600px; height: 350px;" />


输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]


示例 2：

<img alt="" src="https://assets.leetcode.com/uploads/2020/11/17/ex2.jpg" style="width: 300px; height: 114px;" />


输入：root = [5,1,7]
输出：[1,null,5,null,7]


 

提示：


	树中节点数的取值范围是 [1, 100]
	0 <= Node.val <= 1000


 

<meta charset="UTF-8" />注意：本题与主站 897 题相同： <a href="https://leetcode-cn.com/problems/increasing-order-search-tree/">https://leetcode-cn.com/problems/increasing-order-search-tree/


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
 * @return {TreeNode}
 */
var increasingBST = function(root) {

};
// @h code-end