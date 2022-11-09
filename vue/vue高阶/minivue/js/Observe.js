class Observer {
    // 接收传入的对象，将这个对象的属性转换为 Getter/Setter
    constructor (data) {
        this.data = data
        // 遍历对象
        this.walk (data)
    }
    // 封装用于数据遍历的方法
    walk (data) {
        // 将遍历的属性都转换为 Getter、Setter  convert:转换
        Object.keys(data).forEach(key => this.convert(key, data[key]))
    }
    // 封装用于将对象转换为响应式数据的方法
    convert(key, value) {
        // defineReactive 让功能变成私有的函数
        defineReactive(this.data, key, value)
    }
}

// 用于为对象定义一个响应式的属性
 function defineReactive (data, key, value){
    // 创建消息中心
    const dep = new Dep()

    // 检测是否为对象,如果是，创建一个新的 Observer 实例，进行管理
    observer(value)
    
    // 进行数据劫持
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get () {
            console.log('获取了属性')
            // * 在触发 Getter 时添加订阅者
            Dep.target && dep.addSub(Dep.target)
            return value
        },
        set (newValue) {
            console.log('设置了属性')
            if (newValue === value) {
                return
            }
            value = newValue
            observer(value)

            // * 当数据变化时，通知消息中心
            dep.notify()
        }
    })
 } 
 function observer (value) {
    if (typeof value === 'object' && value !== null){
        return new Observer(value)
    }
 }