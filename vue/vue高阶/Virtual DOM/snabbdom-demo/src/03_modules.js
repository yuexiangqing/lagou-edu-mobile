import { init } from "snabbdom"
import { h } from "snabbdom"

// 1. 导入模块 (注意拼写，导入的名称不要写错)
import { styleModule } from "snabbdom"
import { eventListenersModule } from "snabbdom"

// 2.注册模块 （为 patch 函数添加模块对应的能力）
 const patch = init ([
    styleModule,
    eventListenersModule
])

// 3.使用模块（可以利用 h 函数做调用）,想要对当前这个模块操作，在参数2 的位置写一个对象，如果希望当前模块下有子节点，写在参数3，写成数组
let vNode = h('div#box', {
    style: {
        backgroundColor: 'green',
        height: '200px',
        width: '200px'
    }
}, [
    h('h1#title', {
        style: {
            color: '#fff'
        },
        on: {
            click(){
                console.log('点击了 h1 标签')
            }
        }
    }, '这是标题内容'),
    h('p', '这是内容文本')
])

const dom = document.getElementById('app')
patch(dom, vNode)
