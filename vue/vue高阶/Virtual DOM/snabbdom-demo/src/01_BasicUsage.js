import {
    init,
    h,
  } from "snabbdom";

// 1 通过 h 函数创建 VNode (virtual dom 里面用来表示某一个 dom 元素的 js 对象)
// 参数1：元素的基本信息 参数2：元素的文本内容
let vNode = h ('div#box.container', '新内容')
// 获取挂载元素
const dom = document.querySelector('#app')
// 2. 渲染函数： 利用init方法得到，init可以引入模块，并创建 patch 函数，这个函数就是用来进行虚拟节点的生成以及比对处理操作
// 通过init 函数，得到 patch 函数
const patch = init ([]) //引入模块，如果不引入模块，需要写一个空数组

// 3.通过 patch, 将 vNode 渲染到 DOM
// 需要传入两个参数： 1.旧的节点 2.新的节点  当存在多个 vNode状态的时候，可以进行新旧节点的对比 
// 参数1 也可以传 DOM，这时会将 DOM 转换成vNode ,再和参数2 对比，最后再返回更新以后的值
let oldVNode = patch(dom, vNode)

// 4. 创建新的 vNode ,更新给 oldVNode
vNode = h('p#text.abc', '这是p标签的内容')
patch(oldVNode, vNode)
