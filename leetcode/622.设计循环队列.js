/*
@h 2022-08-02 09:04:21
序号: 622
名称: 设计循环队列 | Design Circular Queue
难度: Medium
标签: 设计 | 队列 | 数组 | 链表
链接: https://leetcode-cn.com/problems/design-circular-queue
题解: https://leetcode-cn.com/problems/design-circular-queue/solution/

| 通过数量 | 总提交数 | 通过率 |
| 89.9K | 199.6K | 45.0% |

设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为&ldquo;环形缓冲器&rdquo;。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：


	MyCircularQueue(k): 构造器，设置队列长度为 k 。
	Front: 从队首获取元素。如果队列为空，返回 -1 。
	Rear: 获取队尾元素。如果队列为空，返回 -1 。
	enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
	deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
	isEmpty(): 检查循环队列是否为空。
	isFull(): 检查循环队列是否已满。


 

示例：

MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1);  // 返回 true
circularQueue.enQueue(2);  // 返回 true
circularQueue.enQueue(3);  // 返回 true
circularQueue.enQueue(4);  // 返回 false，队列已满
circularQueue.Rear();  // 返回 3
circularQueue.isFull();  // 返回 true
circularQueue.deQueue();  // 返回 true
circularQueue.enQueue(4);  // 返回 true
circularQueue.Rear();  // 返回 4

 

提示：


	所有的值都在 0 至 1000 的范围内；
	操作数将在 1 至 1000 的范围内；
	请不要使用内置的队列库。



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.data = []
	this.length = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if (this.data.length >= this.length) return false
	this.data.push(value)
	return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if (this.data.length === 0) return false
	this.data.splice(0, 1)
	return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	return this.data[0] ?? -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	return this.data.at(-1) ?? -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	return this.data.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	return this.data.length === this.length
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @h code-end
var obj = new MyCircularQueue(8)
var a = obj.enQueue(3)
var b = obj.enQueue(9)
var c = obj.enQueue(5)
var d = obj.enQueue(0)
var e = obj.deQueue()
var f = obj.deQueue()
var g = obj.isEmpty()
var h = obj.isEmpty()
var i = obj.Rear()
var j = obj.Rear()
var k = obj.deQueue()
console.log(a, b, c, d, e, f,g,h,i,j, k)