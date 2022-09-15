// Commonjs.js模块始终只会导出一个默认成员



// module.exports={
//     foo:"commonjs exports value"
// }

//也可以
// exports.foo ="commonjs exports value"


// 在Node 环境中 不能在 commonjs模块中通过require载入ES Module
const mod = require("./es-module.mjs")
console.log(mod);





// 终端运行：node --experimental-modules commonjs.js  

