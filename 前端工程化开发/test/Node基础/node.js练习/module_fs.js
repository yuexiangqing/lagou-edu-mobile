const fs =require("fs")

// 同步方式读取
// const result = fs.readdirSync("./")
// console.log(result);


// 异步方法读取
fs.readdir("./",function(error,files){
    console.log(files);
})