// 通过 window.customElements 访问 customElementRegistry的实例
// console.log(window.customElements);

// (独立元素的创建方式)
// 1.提前准备用于定义元素的类
class DemoElement extends HTMLElement{ //从 htmlelement 处继承
    constructor(){
        super()
    }
}
// 2.创建自定义元素（俗称创建 web 组件实例）参数1：组件名字，烤串形式命名 参数2：用来对当当前组件进行功能定义的
window.customElements.define('demo-element',DemoElement)