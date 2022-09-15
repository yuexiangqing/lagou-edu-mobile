// 1.-----路径的引用
// import{name} from './module'
// import{name} from './module.js'
// console.log(name);

// import{lowercase} from '/utils/index.js'
// console.log(lowercase("HHH"));


// import {name} from 'module.js'
// 相对路径中 必须以./开头 否则会认为是在加载第三方的模块
// import {name} from './module.js'
// 也可以使用绝对路径
// import {name} from './04_import/module.js'
// 也可以用完整的Url来加载模块 
// import {name} from 'http://localhost:3000/04_import/module.js'
// console.log(name);


// 2.----如果只是需要执行某个模块，而并不需要去提取这个模块当中的成员的话
// 那么久让import后面的{}为空
// 只加载不提取
// 应用：在导入一些不需要外界控制的子功能模块时

//  import {} from './module.js'    //module action
//  简写：
// import './module.js'    //module action 


// 3-------------------
// 如果一个模块当中需要导出的成员特别多，而且在导入时都会用到它们
// 那么可以使用  *  的方式

// import * as mod from './module.js'
// 这时候需要将导出的成员通过as的方式，全部放到一个对象中 mod
// console.log(mod);  //可以通过mod.成员名 拿到具体的导出成员


// 4-------------动态加载模块
// 我们可以将import当成一个导入模块的声明 ，它需要在开发阶段就明确我们需要导入的模块的文件路径
// 但是很多时候，我们是在运行阶段才知道这个路径 那么这时候不能使用 import 关键字引入一个变量
// var modulePath = './module.js'
// import{name} from modulePath
// console.log(name);  //会报错 ，因为import只能出现在最顶层的作用域

// if(true){
//     import {name} from './module.js'
// }  //也会报错

// 提供了一个全局的import函数，它专门用来动态导入模块  返回的是一个promise，会自动加载，模块的对象可以通过参数去拿到
// import('./module.js').then(function(module){
//     console.log(module);
// })


// 5---------同时导出命名成员和匿名成员,如果还想导入里面的default，需要给default重命名
// import{name,age,default as title} from './module.js'
// console.log(name,age,title);

// 简写：
import title,{name,age} from './module.js'  //也可以将具名和默认的用逗号分隔，逗号左边的是默认，右边是具名，左边的名字可以随意起
console.log(name,age,title);






