//用解构的方式，引入函数 把gulp里面的内容写出来
const {src,dest}=require("gulp") 
// 引入插件
const less = require("gulp-less")  //转为css文件
const cleancss = require("gulp-clean-css")  //压缩
const rename = require("gulp-rename")  //重命名
const autoprefixer =require("gulp-autoprefixer") //引入gulp-autoprefixer
const autoPrefixer = require("gulp-autoprefixer")



// 声明gulp任务
const style = () => {
    return src("src/styles/main.less",{base:"src"})
    .pipe(less())
    // gulp-autoprefixer 代码less之后，压缩之前 然后在main.less中添加上 .code  
    .pipe(autoPrefixer())     ////gulp style  .code 中从原来的一行代码变成四行 解决兼容性问题
    // .pipe(cleancss())
    // .pipe(rename({"extname":".min.css"})) //扩展名
    .pipe(dest("dist"))  //pipe可以写多个 但是要注意里面的执行顺序
}
// 导出任务
module.exports = {
    style
}                           //gulp style