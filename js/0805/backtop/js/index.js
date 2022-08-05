// 获取页面卷动的距离
// document.body.scrollTop
// document.documentElement.scrollTop
// 获取元素
var header = my$("top");
var backtop = my$("totop");

// 1.在页面往下卷动到一定距离后，让header高度变低，让返回顶部按钮出现
window.onscroll = function(){
  if(document.documentElement.scrollTop>10){
    header.className = "header fixed";
    backtop.style.display = "block";
  } else if (document.documentElement.scrollTop<=10){
    header.className = "header";
    backtop.style.display = "none";
  }
}
// 定义一个变量，存储定时器
var timer;
//2.点击返回顶部，让页面以动画的方式跳转到页面顶部
backtop.onclick = function(){
var target = 0;
// 起始点：
var current = document.documentElement.scrollTop;
var step = 30;
timer = setInterval(function(){
  current -=step;
  // 停止定时器
  if(current <= target){
    current = target;
    clearInterval(timer);
  }
  document.documentElement.scrollTop = current;
},10);
}