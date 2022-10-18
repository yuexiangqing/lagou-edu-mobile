// 创建继承自内置元素的自定义元素

// 1.在 class 中继承对应内置元素的构造器
class DemoElement extends HTMLUListElement{
    constructor(){
        super()
        const image = document.createElement('img')
        image.src = 'https://s21.lgstatic.com/growth/activity/20210128/1611825307111.png'
        image.height='200'
        // 这里的this 指向当前自定义元素的实例
        this.append(image)
    }
}

// 传入参数 3 的 extends 为对应元素名
window.customElements.define('demo-element',DemoElement,{extends:'ul'})//第三个参数是继承自哪个内置元素