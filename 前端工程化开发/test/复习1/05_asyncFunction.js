const fs = require("fs")

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

// async function run() //把普通函数变为异步函数，前面加async

async function run(){
    let x = await readFile("./x.txt")
    let y = await readFile("./y.txt")
    let z = await readFile("./z.txt")
    return[x,y,z]
}
run().then(result=>console.log(result))