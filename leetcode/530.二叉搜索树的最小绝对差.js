/*
@h 2022-07-06 09:27:27
序号: 530
名称: 二叉搜索树的最小绝对差 | Minimum Absolute Difference in BST
难度: Easy
标签: 树 | 深度优先搜索 | 广度优先搜索 | 二叉搜索树 | 二叉树
链接: https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
题解: https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/solution/

| 通过数量 | 总提交数 | 通过率 |
| 123.3K | 195.5K | 63.1% |

给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

差值是一个正数，其数值等于两值之差的绝对值。

 

示例 1：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg" style="width: 292px; height: 301px;" />

输入：root = [4,2,6,1,3]
输出：1


示例 2：
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg" style="width: 282px; height: 301px;" />

输入：root = [1,0,48,null,null,12,49]
输出：1


 

提示：


	树中节点的数目范围是 [2, 104]
	0 <= Node.val <= 105


 

注意：本题与 783 <a href="https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/">https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/ 相同


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
 * @return {number}
 */
var getMinimumDifference = function(root) {

};
// @h code-end
