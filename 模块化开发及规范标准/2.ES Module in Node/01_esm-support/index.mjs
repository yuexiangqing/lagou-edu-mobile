import{foo,bar} from './module.mjs'
console.log(foo,bar);

// 在node环境当中想要直接使用es module,必须做两件事
// 1.把文件的后缀名改为mjs
// 2.进入文件夹，并将 node --experimental-modules index.mjs 在终端输入，启动实验特性

import fs from 'fs'
fs.writeFileSync('./foo.txt','es module working')  //通过es module载入原生的模块 形成foo.txt

// 内置模块成员
import { writeFileSync } from 'fs';
writeFileSync('./bar.txt','es module') //可以通过提取的方式，直接提取系统内置模块的成员
// 因为系统内置的模块，官方都做了兼容



// import _ from 'lodash'    //导入第三方模块
// console.log(_.camelCase('ES Module'));  //载入成功

// import { camelCase } from 'lodash';
// console.log(camelCase('ES Module')); //不能使用这种方式载入
// 因为import这后面的{} 不是解构，而第三方模块都是导出默认成员，必须使用默认成员导入的方式



