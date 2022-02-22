/*
@h 2022-02-17 10:39:55
序号: 剑指 Offer II 056
名称: 二叉搜索树中两个节点之和 | 二叉搜索树中两个节点之和
难度: Easy
标签: 树 | 深度优先搜索 | 广度优先搜索 | 二叉搜索树 | 哈希表 | 双指针 | 二叉树
链接: https://leetcode-cn.com/problems/opLdQZ
题解: https://leetcode-cn.com/problems/opLdQZ/solution/

| 通过数量 | 总提交数 | 通过率 |
| 8.1K | 11.3K | 72.2% |

给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

 

示例 1：


输入: root = [8,6,10,5,7,9,11], k = 12
输出: true
解释: 节点 5 和节点 7 之和等于 12


示例 2：


输入: root = [8,6,10,5,7,9,11], k = 22
输出: false
解释: 不存在两个节点值之和为 22 的节点


 

提示：


	二叉树的节点个数的范围是  [1, 104].
	-104 <= Node.val <= 104
	root 为二叉搜索树
	-105 <= k <= 105


 

注意：本题与主站 653 题相同： <a href="https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/">https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/


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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {

};
// @h code-end