// webpack打包入口文件
import data from './data.json';

// 引入polyfill' 会转译所有的JS新语法
// import '@babel/polyfill'

// 引入css中的main.css样式文件
import './css/main.css';

// 引入less文件
import './css/main.less';

// 引入markdown文件
import about from './about.md';

// 以模块的方式引入图片
import boy from './image/xph.gif';

// 引入图片
import homeIcon from './image/icon/home-blue.png';

// eslint-disable-next-line
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
  // eslint-disable-next-line
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('Promise is working');
    // eslint-disable-next-line
    resolve();
  }, 1000);
});
// eslint-disable-next-line
console.log(p);

// 初始化图片标签
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
// console.log("Hello webpack")
// eslint-disable-next-line
console.log('接口地址', API_BASE_URL);

// eslint-disable-next-line
console.log(about);
