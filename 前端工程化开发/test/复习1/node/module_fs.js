const fs = require("fs")
// 同步读取方式
// const result = fs.readFileSync("./")
// console.log(result)

// 异步方法读取
fs.readdir("./",function(error,files){
    console.log(files);
})