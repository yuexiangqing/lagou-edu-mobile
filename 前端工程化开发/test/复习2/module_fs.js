const fs = require("fs")

// 同步读取方式
// const result = fs.readdirSync("./")
// console.log(result)

// 异步方法读取
fs.readdir("./","utf8",function(error,files){
    console.log(files)
})