const fs = require("fs")

const promise = new Promise(function(resolve,reject){  //这里面的这个函数叫执行器
    fs.readFile("./x.txt","utf-8",function(error,result){  //包裹异步api
        if(error){
            reject(error)
        } else{
            resolve(result)
        }
    })
})
promise
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})
 