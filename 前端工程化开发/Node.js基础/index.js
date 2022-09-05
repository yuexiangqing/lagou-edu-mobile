// function fn(){
//     console.log("Hello Node.js");
// }
// fn()

// var a =10
// console.log(a)

// require("./logger.js") 可以省略后缀
// const logger =require("./logger")
// console.log(logger)
// console.log(logger.endPoint)
// logger.log("Hello Node") 

// 要使用const关键字声明
// const logger =require("./logger")
// logger = 1   //不能给常量重新去复制
// logger.log("")


// const logger = require("./logger")
// logger("Hello")

const logger = require("./logger")
console.log(logger);
console.log(logger.endPoint);


