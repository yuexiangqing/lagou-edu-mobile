//旧版的任务声明方式 
// 先引入安装的gulp
const gulp = require("gulp")



// 创建gulp任务  创建一个js函数
//在新版的gulp当中，做了一个约定：所有的任务都是异步的任务，以异步的方式执行
// 异步函数是有多种形式的 比如回调函数 promise 流的方式 等
const task1 = (cb)=>{
    console.log("Task 1 is running")
    cb()
}
const task2 = (cb)=>{
    console.log("Task 2 is running")
    cb()
}
// 导出任务
module.exports={
    task1,  //gulp task1
    default:task2  //如果这里任务名称是default ，那在后面终端执行的时候 ，第二个参数（任务名称可以省略） "gulp" 同时，和执行"gulp default '是一样的
    // 即：默认任务
}



// 旧版声明任务的语法 
gulp.task("task3",(cb)=>{
    console.log("Task 3 is running")

    cb()
})
// 这里不需要导出任务，如果导出会报错
