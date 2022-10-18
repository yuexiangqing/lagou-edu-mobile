// 1.提前准备用于定义元素的类(独立自定义元素)

class DemoElement extends HTMLElement{ //从 htmlelement 处继承
    constructor(){
        super()
        // 为了确保组件的功能独立，应当将内部元素添加给自定义元素的Shadow
        // 1.为元素创建 Shadow
        const shadow = this.attachShadow({mode:'open'})

        const image = document.createElement('img')
        image.src = 'https://s21.lgstatic.com/growth/activity/20210128/1611825307111.png'
        image.height='200'

        const text = document.createElement('p')
        text.textContent = '组件内容'

        const style = document.createElement('style')
        style.textContent=`
        :host{ 
            border:1px solid blue;
        }
        p{
            font-size:20px;
            color:blue;
        }
        `
        // 2.将内部的结构添加个 shadow 
        shadow.append(image,text,style)
    }
}
// 2.创建自定义元素（俗称创建 web 组件实例）参数1：组件名字，烤串形式命名 参数2：用来对当当前组件进行功能定义的
window.customElements.define('demo-element',DemoElement)