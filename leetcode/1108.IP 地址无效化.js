/*
@h 2022-06-21 09:32:27
序号: 1108
名称: IP 地址无效化 | Defanging an IP Address
难度: Easy
标签: 字符串
链接: https://leetcode-cn.com/problems/defanging-an-ip-address
题解: https://leetcode-cn.com/problems/defanging-an-ip-address/solution/

| 通过数量 | 总提交数 | 通过率 |
| 79K | 93.7K | 84.3% |

给你一个有效的 <a href="https://baike.baidu.com/item/IPv4" target="_blank">IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

 

示例 1：

输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"


示例 2：

输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"


 

提示：


	给出的 address 是一个有效的 IPv4 地址



*/

const { test } = require('./utils')
// @h code-start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
	return address.replace(/\./g, '[.]')
};
// @h code-end

test(defangIPaddr, ["1.1.1.1"], "1[.]1[.]1[.]1")
test(defangIPaddr, ["255.100.50.0"], "255[.]100[.]50[.]0")