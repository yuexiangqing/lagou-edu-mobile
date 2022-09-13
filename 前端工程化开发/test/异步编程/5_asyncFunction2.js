const fs = require("fs")
const promisify = require("util").promisify  
const readFile = promisify(fs.readFile) //promisify方法会返回一个新的读取文件的方法 ，而返回的值就是一个Promise对象，而不是通过回调函数拿结果


async function run (){  
     let x =await readFile("./x.txt","utf-8")
     let y =await readFile("./y.txt","utf-8")
     let z =await readFile("./z.txt","utf-8")
     return[x,y,z]
}
// console.log(run());
run().then(result=>console.log(result))
// const fn =async ()=>{} //把箭头函数变为异步函数

