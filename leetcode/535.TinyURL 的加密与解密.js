/*
@h 2022-06-29 09:18:20
序号: 535
名称: TinyURL 的加密与解密 | Encode and Decode TinyURL
难度: Medium
标签: 设计 | 哈希表 | 字符串 | 哈希函数
链接: https://leetcode-cn.com/problems/encode-and-decode-tinyurl
题解: https://leetcode-cn.com/problems/encode-and-decode-tinyurl/solution/

| 通过数量 | 总提交数 | 通过率 |
| 22.6K | 26.3K | 85.8% |

TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk 。请你设计一个类来加密与解密 TinyURL 。

加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL ，并且这个 TinyURL 可以用解密方法恢复成原本的 URL 。

实现 Solution 类：

<div class="original__bRMd">


	Solution() 初始化 TinyURL 系统对象。
	String encode(String longUrl) 返回 longUrl 对应的 TinyURL 。
	String decode(String shortUrl) 返回 shortUrl 原本的 URL 。题目数据保证给定的 shortUrl 是由同一个系统对象加密的。




示例：


输入：url = "https://leetcode.com/problems/design-tinyurl"
输出："https://leetcode.com/problems/design-tinyurl"

解释：
Solution obj = new Solution();
string tiny = obj.encode(url); // 返回加密后得到的 TinyURL 。
string ans = obj.decode(tiny); // 返回解密后得到的原本的 URL 。




提示：


	1 <= url.length <= 104
	题目数据保证 url 是一个有效的 URL





*/

const { test } = require('./utils')
// @h code-start
// 摆烂解法
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    return longUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return shortUrl
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @h code-end
