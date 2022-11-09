class Compiler {
    constructor (vm) {
        this.vm = vm
        this.el = vm.$el

        // 初始化模版编译方法
        this.compile(this.el) 
    }
    // 基础模版方法
    compile(el){
        const childNodes = el.childNodes
        Array.from(childNodes).forEach(node => {
            // 检测节点类型 （文本节点，元素节点）
            if (isTextNode(node)) {
                // 编译文本节点内容
                this.compileText(node)
            } else if (isElementNode(node)) {
                // 编译元素节点内容

            }
        })
    }
    // 封装文本节点的编译方法
    compileText (node) {
        const reg = /\{\{(.+?)\}\}/g
        // 去除内容中不必要的空格与换行
        const value = node.textContent.replace(/\s/g, '')
        // 声明数据存储多段文本
        const tokens = []
        // 记录已经操作过的位置的索引
        let lastIndex = 0
        // 记录当前正在提取内容的初始索引
        let index
        let result
        while (result = reg.exec(value)) {
            // 本次提取内容的初始索引
            index = result.index
            // 处理普通文本
            if (index > lastIndex) {
                // 将中间部分的内容存储到 tokens 中
                tokens.push (value.slice(lastIndex, index))
            }
            // 处理插值表达式内容(去除空格的操作，可省略)
            const key = result[1].trim()
            // 根据key 获取对应属性值，存储到 tokens
            tokens.push(this.vm[key])

            // 更新 lastIndex 
            lastIndex = index + result[0].length
            
            // 创建订阅者 Watcher 实时订阅数据变化
            const pos = tokens.length - 1
            new Watcher (this.vm, key, newValue => {
                // 数据变化，修改 tokens 中的对应数据
                tokens[pos] = newValue
                node.textContent = tokens.join('')
            })
        }
        // 初始页面初始渲染
        node.textContent = tokens.join('')
    }
}
// 判断节点是否为文本节点
function isTextNode (node) {
    return node.nodeType === 3
}
// 判断节点是否为元素节点
function isElementNode (node) {
    return node.nodeType === 1
}