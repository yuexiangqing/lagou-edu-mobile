// import{foo,bar} from './module.js'
// import可以配合export使用，将导入的结果直接作为当前模块的导出成员
// export {foo,bar} from './module.js'
// console.log(foo,bar);

// 导入两个组件

// import { Button } from "./components/button.js";
// import { Avatar } from "./components/avatar.js";
// 太麻烦 直接都导入到index.js，然后从index.js中导入,从而简化，这里的index.js 就像一个桥梁


import{Button,Avatar} from './components/index.js'

console.log(Button);
console.log(Avatar);

