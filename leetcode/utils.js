const timeLog = (name, fn, args, expect) => {
    console.time(name)
    const output = fn(...args)
    console.log('output ->', output)
    console.log('result ->', JSON.stringify(output) === JSON.stringify(expect) ? '✅' : '❌')
    console.timeEnd(name)
}
const separator = () => {
    console.log('-----------------------------')
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

module.exports = {
    /**
     * 
     * @param {Function} fn 
     * @param {Array} args 
     * @param {any} expect 
     */
    test: (fn, args, expect) => {
        if (!(args instanceof Array)) {
            args = [args]
        }
        separator()
        console.log('input  ->', args)
        console.log('expect ->', expect)
        timeLog('runtime', fn, args, expect)
        separator()
    },
    /**
     * 数组转换为二叉树
     * @param {Array} arr 
     */
    generateTreeNode: (arr) => {
        if (!arr || !arr.length) return null
        const root = new TreeNode(arr.shift())
        let target = root
        while (arr.length) {
            const val = arr.shift()
            if (!root.left) {
                
            }
            root[step % 2 ? 'right': 'left'] = new TreeNode(val)
            step++
        }
        return res
    }
}
