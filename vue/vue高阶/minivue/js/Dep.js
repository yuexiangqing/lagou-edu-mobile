class Dep {
    constructor () {
        // 存储订阅者
        this.subs = []
    }
    // 添加订阅者
    addSub (sub) {
        if(sub && sub.update) {
            // 订阅者添加操作
            this.subs.push(sub)
        }
    }
    // 通知订阅者
    notify () {
        // 遍历订阅者并执行更新功能即可
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}