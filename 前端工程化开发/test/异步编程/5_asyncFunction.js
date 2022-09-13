const fs = require("fs")

function readFile(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,"utf-8",function(error,result){
            if(error){
                reject(error)
            } else{
                resolve(result)
            }
        })
    })
}

// async function run (){  //把普通函数变为异步函数 前面加async  1.异步函数的返回值会被自动包裹在promise对象中
//     return "a"
// }
async function run (){  //2.await 关键字可以暂停异步函数的执行  后面跟着promise 对象  当await后面的api返回结果之后， 再向下执行
     let x =await readFile("./x.txt")
     let y =await readFile("./y.txt")
     let z =await readFile("./z.txt")
     return[x,y,z]
}
// console.log(run());
run().then(result=>console.log(result))
// const fn =async ()=>{} //把箭头函数变为异步函数

