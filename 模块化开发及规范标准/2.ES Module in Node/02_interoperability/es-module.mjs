// ES Module中可以导入COmmonjs模块

// import mod from "./commonjs.js"
// console.log(mod);  //使用载入默认成员的方式载入

// import {foo} from "./commonjs.js"
// console.log(foo);  //报错 因为Commonjs.js模块始终只会导出一个默认成员 
// ****不能直接提前成员，注意：import 不是解构导出对象



export const foo = "es module export value"




// 终端运行：node --experimental-modules es-module.mjs