/*
@h 2022-02-10 16:36:16
序号: 101
名称: 对称二叉树 | Symmetric Tree
难度: Easy
标签: 树 | 深度优先搜索 | 广度优先搜索 | 二叉树
链接: https://leetcode-cn.com/problems/symmetric-tree
题解: https://leetcode-cn.com/problems/symmetric-tree/solution/

| 通过数量 | 总提交数 | 通过率 |
| 489.9K | 859.8K | 57.0% |

给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

示例 1：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg" style="width: 354px; height: 291px;" />

输入：root = [1,2,2,3,4,4,3]
输出：true


示例 2：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg" style="width: 308px; height: 258px;" />

输入：root = [1,2,2,null,3,null,3]
输出：false


 

提示：


	树中节点数目在范围 [1, 1000] 内
	-100 <= Node.val <= 100


 

进阶：你可以运用递归和迭代两种方法解决这个问题吗？


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
 * @return {boolean}
 */
var isSymmetric = function(root) {

};
// @h code-end