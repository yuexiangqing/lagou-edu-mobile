// webpack打包入口文件
import data from './data.json';

// 引入polyfill' 会转译所有的JS新语法
// import '@babel/polyfill'

// 引入css中的main.css样式文件
import './css/main.css';

// 引入less文件
import './css/main.less';

console.log(data);

// 写一个箭头函数，在html文件中进行引用 但因为不是全局，引用会报错
const showMsg = () => {
  // eslint-disable-next-line
  alert('Hello');
};
// 使用window让该函数挂靠在全局，调用成功
// eslint-disable-next-line
window.showMsg = showMsg;

const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise is working');
    resolve();
  }, 1000);
});
console.log(p);

// console.log("Hello webpack")
