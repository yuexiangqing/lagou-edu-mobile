// function B (callback){
//     setTimeout(function(){
//         callback({test:"test"})
//     },2000)
// }
// function A(result){
//     console.log(result)
// }
// B(A)

const fs = require("fs")
// fs.readFile("./1.txt","utf-8",function(error,result){
//     console.log(result);
// })


fs.readFile("./x.txt", "utf-8", function () {
    console.log("x")
    fs.readFile("./y.txt", "utf-8", function () {
        console.log("y")
        fs.readFile("./z.txt", "utf-8", function () {
            console.log("z")
        })
    })
})

