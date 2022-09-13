// 在之前要进行包安装
// 引入gulp
const gulp =require("gulp")
// 都要以异步的方式来运行，需要写个回调
const task1 = (cb)=>{
    setTimeout(()=>{
        console.log("Task 1 is running")
      cb()
    },1000)
}

const task2 = (cb)=>{
    setTimeout(()=>{
        console.log("Task 2 is running")
      cb()
    },1000)
}

const task3 = (cb)=>{
    setTimeout(()=>{
        console.log("Task 3 is running")
      cb()
    },1000)
}
// 任务的并行执行
// 还是要导出
// module.exports
exports.p = gulp.parallel(task1,task2,task3)  //gulp p

// 任务的串行执行
exports.s = gulp.series(task1,task2,task3)   //gulp s