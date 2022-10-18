// 1.提前准备用于定义元素的类(独立自定义元素)

class DemoElement extends HTMLElement{ 
    constructor(){
        super()
        // 1.获取 HTML 模版内容
        const template = document.getElementById('myTemplate')
        // 创建shadow 
        const shadow = this.attachShadow({mode:'open'})
        shadow.append(template.content.cloneNode(true))

    }
}
// 2.创建自定义元素（俗称创建 web 组件实例）参数1：组件名字，烤串形式命名 参数2：用来对当当前组件进行功能定义的
window.customElements.define('demo-element',DemoElement)