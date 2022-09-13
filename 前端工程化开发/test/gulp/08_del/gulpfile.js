//用解构的方式，引入函数 把gulp里面的内容写出来

// css 和  JS 和HTML之间的构建 没有明确的顺序，可以使用并行执行  parallel
const {src,dest, parallel,series}=require("gulp")  //先引入series


// 引入插件
const less = require("gulp-less")  //转为css文件
const cleancss = require("gulp-clean-css")  //压缩
const rename = require("gulp-rename")  //重命名
const autoPrefixer = require("gulp-autoprefixer")//引入gulp-autoprefixer
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const htmlmin = require("gulp-htmlmin")
const imagemin = require("gulp-imagemin")
const del = require("del")




// 声明 gulp 样式任务
const style = () => {
    return src("src/styles/main.less",{base:"src"})
    .pipe(less())
    .pipe(autoPrefixer())     
    .pipe(cleancss())
    .pipe(rename({"extname":".min.css"})) 
    .pipe(dest("dist"))  
}

// 声明 脚本 构建任务
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

// 声明 页面 的构建任务
// 也是用文件流
const html =()=>{
    return src("src/index.html")
    .pipe(htmlmin({ 
        collapseWhitespace: true,  //里面的空白字符折叠  一定要选 才能压缩  但是样式文件没被压缩
        minifyCSS:true,      //压缩里面的css
        minifyJS:true      //压缩里面的js
     }))     
    .pipe(dest("dist"))
}


// 声明 图片  构建任务
const image = ()=>{
    return src("src/images/**",{base:"src"})  // **表示匹配images下面的所有内容 base是路径保持的参数 gulp-image默认执行的是无损压缩
    // .pipe(imagemin())
    .pipe(imagemin([
        imagemin.mozjpeg({quality: 75, progressive: true}) //有损压缩 在官网npmjs.com 可以查询
    ]))
    .pipe(dest("dist"))    
}


// 声明一个文件清除的任务
const clean = ()=>{
 return del(["dist"])
}


// 组合任务    css 和  JS 和HTML之间的构建 没有明确的顺序，可以使用并行执行  parallel
const build = parallel(style,script,html,image)

const dev = series(clean,build)

// npm i --save-dev gulp-imagemin@7.1.0

// 导出任务
module.exports = {
    // style,
    // script,
    // html ,
    build,           
    // image,
    // clean,
    dev
}             //用gulp build 执行所有的              

