import {
    init,
    h,
  } from "snabbdom";

  const patch = init([])

// 创建包含子节点的 VNode
// h 函数第二个参数：如果传入文本，就代表内容； 如果传入数组，就代表传入的是子节点的列表
// ---参数2 的数组为子节点列表，内部就应该传入vNode,就要写 h 函数
// let vNode = h('div#container', 'abc')
let vNode = h('div#container', [
  h('h1', '标题文本'),
  h('p', '内容文本')
])

// 获取挂载元素
const dom = document.querySelector('#app')

// 渲染vNode
const oldVNode = patch(dom, vNode)
 
// 想要通过清空操作更新页面  '!' 代表的一个注释节点，直接清空了页面
patch(oldVNode, h('!'))