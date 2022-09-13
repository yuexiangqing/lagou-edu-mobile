//用解构的方式，引入函数 把gulp里面的内容写出来
const {src,dest}=require("gulp") 
// 引入插件
const less = require("gulp-less")  //转为css文件
const cleancss = require("gulp-clean-css")  //压缩
const rename = require("gulp-rename")  //重命名
const autoprefixer =require("gulp-autoprefixer") //引入gulp-autoprefixer
const autoPrefixer = require("gulp-autoprefixer")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")




// 声明gulp任务
const style = () => {
    return src("src/styles/main.less",{base:"src"})
    .pipe(less())
    .pipe(autoPrefixer())     
    .pipe(cleancss())
    .pipe(rename({"extname":".min.css"})) 
    .pipe(dest("dist"))  
}

// 声明脚本构建任务
const script =()=>{
    return src("src/js/main.js")
    // 官网直接拿过来的
    .pipe(babel({
        presets: ['babel-preset-env']  //转换规则，直接复制就行  然后执行 gulp script 再在dist中寻到main.js已经进行了转换
    }))
    .pipe(uglify())//压缩
    .pipe(rename({"extname":".min.css"})) 
    .pipe(dest("dist/scripts"))
}
// 导出任务
module.exports = {
    style,
    script
}                           //gulp script  把src下的移动到main中了 

// 安装 babel
// npm i --save-dev gulp-babel@7 babel-core babel-preset-env

// 安装 压缩插件
// npm i gulp-uglify -D

// 重命名不需要再单独安装和引入了 因为刚才已经使用过了
