const url = "http://www.example.com"
function log(message) {
    console.log(message)
} 


console.log(__filename);
console.log(__dirname);

// // console.log(module);
// // module.exports.url = url
// module.exports.endPoint = url
// module.exports.log =log

// // 在这里给添加属性的时候，名字不一定和常量一样
// console.log("running");


// 有时在一个模块中只会导出一个成员，为方便其他模块使用，可以采用以下导入方式
// module.exports = function(message){
//     console.log(message);
// }

// exports.endPoint =url
// exports.log = log

exports ={
    endPoint:url,
    log:log
}