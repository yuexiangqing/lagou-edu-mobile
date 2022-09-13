const fs = require("fs")

// fs.readFile("./x.txt", "utf-8", function () {
//     fs.readFile("./y.txt", "utf-8", function () {
//         fs.readFile("./z.txt", "utf-8", function () {
//             console.log("x")
//             console.log("y")
//             console.log("z")
//         })
//     })
// })

function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, "utf-8", function (error, result) {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}
Promise.all([
    readFile("./x.txt"),
    readFile("./y.txt"),
    readFile("./z.txt")
]).then(function (result) {
    console.log(result)
})