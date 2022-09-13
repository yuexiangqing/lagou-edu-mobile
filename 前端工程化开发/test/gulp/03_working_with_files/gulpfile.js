// npm i gulp -D
// 引入gulp
// const gulp = require("gulp")

// 简化
// 可以用解构的方式，引入函数 把gulp里面的内容写出来
const {src,dest}=require("gulp") //这是说，gulp这个函数当中，有src函数，也有dest函数，如果要用，可以直接使用




// 声明gulp任务
const style = () => {
    // 流就是异步操作
    // 所有不需要再写回调函数
    // return gulp.src("src/styles/main.less").pipe(gulp.dest("dist")) //这里面的src相当于fs当中的readfile解读文件  dest是目的地 dist是分发
    // return gulp.src("src/styles/main.less",{base:"src"}).pipe(gulp.dest("dist")) //如果想和导入的目录结构一样 src还有一个参数 是一个对象  basc 就是目录结构参考谁

    // 解构方式
    return src("src/styles/main.less",{base:"src"}).pipe(dest("dist")) 
}
// 导出任务
module.exports = {
    style
}                           //gulp style