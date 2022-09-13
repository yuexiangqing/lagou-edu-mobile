const http = require("http")

const server = http.createServer(function (req, res) {
    // request 请求对象
    // response响应对象
    if (req.url === "/") {
        res.write("Hello Node.js")
        res.end()
    } 
    if(req.url==="/api/course"){
        res.write(JSON.stringify[1,2,3])  //只能显示字符串
        res.end()
    }

})
server.listen(3000)    //需要监听一个端口
console.log("服务器启动成功");