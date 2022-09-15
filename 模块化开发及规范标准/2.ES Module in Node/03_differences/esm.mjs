// 在终端 ：nodemon --experimental-modules esm.mjs来启动，当文件修改后，会自动重新运行
// console.log(module);

// ESM 中没有CommonJS中的那些模块全局成员了
// 而对于__filename 和__dirname可以用
// console.log(import.meta.url);
// 通过
import {fileURLToPath} from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)  //拿到__filename
console.log(__filename)

const __dirname = dirname(__filename)
console.log(__dirname)   //拿到dirname


