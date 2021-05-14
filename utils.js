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
}
