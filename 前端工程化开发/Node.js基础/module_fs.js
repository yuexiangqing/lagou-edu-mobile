const fs = require("fs")


// 同步方式读取
// const result = fs.readdirSync("./")  //读取当前文件夹
// console.log(result);

// 异步方法读取  （更加推荐)
fs.readdir("./",function(error,files){
 console.log(files)      //files相当于上面的result  错误优先函数
})
