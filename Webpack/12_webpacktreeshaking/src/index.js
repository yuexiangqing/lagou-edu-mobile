/**
 * Webpack 打包入口文件
 */
// polyfill 会转译所有的 JS 新语法
// import '@babel/polyfill'
// eslint-disable-next-line
import $ from 'jquery';
import data from './data.json';

// 引入样式文件
import './css/main.css';
import './css/main.less';

import about from './about.md';

// 以模块的方式引入图片
import boy from './image/xph.gif';
import homeIcon from './image/icon/home-blue.png';

import { add } from './math';
import './extend'
console.log((7).pad(3))

// eslint-disable-next-line
console.log('2+4=',add(2,4));

// eslint-disable-next-line
console.log(data, '123');

const showMsg = () => {
  // eslint-disable-next-line
  alert('Hello');
};

// eslint-disable-next-line
window.showMsg = showMsg;

const p = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('Promise is working');
    resolve();
  }, 1000);
});
// eslint-disable-next-line
console.log(p);

// eslint-disable-next-line
const img = new Image();
img.src = boy;

// eslint-disable-next-line
document.body.append(img);

// eslint-disable-next-line
const img1 = new Image();
img1.src = homeIcon;

// eslint-disable-next-line
document.body.append(img1);

// console.log('Hello Webpack')

// eslint-disable-next-line
console.log('接口地址：', API_BASE_URL);

// eslint-disable-next-line
console.log(about)

// 给 body 添加一个页脚(包含备案号)
// $('body').append('<h3>备案号：XXXXXXX</h3>')

// // 验证按需加载
// document.getElementById('btn').onclick = function() {
//   // import 启动懒加载
//   // webpackChunkName: 'desc' 指定懒加载的文件名称
//   // webpackPrefetch: true 启动预加载
//   import(/* webpackChunkName: 'desc', webpackPrefetch: true */'./wp').then(({ desc }) => {
//     alert(desc())
//   })
// }
