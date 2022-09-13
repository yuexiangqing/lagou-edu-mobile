var fs = require("fs")
var path = require("path")

// 递归创建目录
function myMkdirSync(dirname){
    if(fs.existsSync(dirname)){  //如果这个目录存在的话
        return true;
    }else{
        // 如果父级目录已经创建，然后才能子集目录
         //path.dirname 会返回父级目录  每次进去会返回父级路径
        if(myMkdirSync(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

// 第一次调用
// mkdirSync("a/b/c")
// 第二次调用
// mkdirSync("a/b")
// 第三次调用
// mkdirSync("a")
// 第四次 目录存在 zhibo 返回true




// mkdirSync("a/b/c")；