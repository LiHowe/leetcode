/*
@h 2022-07-21 09:12:20
序号: 814
名称: 二叉树剪枝 | Binary Tree Pruning
难度: Medium
标签: 树 | 深度优先搜索 | 二叉树
链接: https://leetcode-cn.com/problems/binary-tree-pruning
题解: https://leetcode-cn.com/problems/binary-tree-pruning/solution/

| 通过数量 | 总提交数 | 通过率 |
| 33.3K | 46.9K | 71.0% |

给你二叉树的根结点 root ，此外树的每个结点的值要么是 0 ，要么是 1 。

返回移除了所有不包含 1 的子树的原二叉树。

节点 node 的子树为 node 本身加上所有 node 的后代。

 

示例 1：
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png" style="width: 500px; height: 140px;" />

输入：root = [1,null,0,0,1]
输出：[1,null,0,null,1]
解释：
只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。


示例 2：
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png" style="width: 500px; height: 115px;" />

输入：root = [1,0,1,0,0,0,1]
输出：[1,null,1,null,1]


示例 3：
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png" style="width: 500px; height: 134px;" />

输入：root = [1,1,0,1,1,0,1,0]
输出：[1,1,0,1,1,null,1]


 

提示：


	树中节点的数目在范围 [1, 200] 内
	Node.val 为 0 或 1



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
var pruneTree = function(root) {

};
// @h code-end