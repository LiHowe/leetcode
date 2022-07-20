/*
@h 2022-07-18 09:32:22
序号: 705
名称: 设计哈希集合 | Design HashSet
难度: Easy
标签: 设计 | 数组 | 哈希表 | 链表 | 哈希函数
链接: https://leetcode-cn.com/problems/design-hashset
题解: https://leetcode-cn.com/problems/design-hashset/solution/

| 通过数量 | 总提交数 | 通过率 |
| 87.9K | 137.7K | 63.8% |

不使用任何内建的哈希表库设计一个哈希集合（HashSet）。

实现 MyHashSet 类：


	void add(key) 向哈希集合中插入值 key 。
	bool contains(key) 返回哈希集合中是否存在这个值 key 。
	void remove(key) 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做。

 

示例：


输入：
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
输出：
[null, null, null, true, false, null, true, null, false]

解释：
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // 返回 True
myHashSet.contains(3); // 返回 False ，（未找到）
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // 返回 True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // 返回 False ，（已移除）

 

提示：


	0 <= key <= 106
	最多调用 104 次 add、remove 和 contains



*/

const { test } = require('./utils')
// @h code-start

var MyHashSet = function() {
	this.set = new Set()
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
	this.set.add(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
	this.set.remove(key)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
	return this.set.has(key)
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @h code-end