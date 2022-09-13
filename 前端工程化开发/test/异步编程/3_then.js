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
readFile("./x.txt")
.then(function(x){ 
    console.log("x");
    return readFile("./y.txt")
    // return readFile("./y1.txt")
})
.then(function(y){
    console.log("y");
    return readFile("./z.txt")
})
.then(function(z){
    console.log("z");
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("finally");  //无论成功还是失败 都会读取这个  这个函数没有参数
})