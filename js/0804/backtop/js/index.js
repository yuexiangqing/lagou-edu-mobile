// 获取页面卷动的距离
// document.body.scrollTop  
// 谷歌浏览器兼容问题  不能通过body获取 
// document.documentElement.scrollTop
// 获取元素
var header = my$("top");
var backtop = my$("totop");

// 1.在页面往下卷动到一定距离后，让header高度变低，让返回顶部按钮出现
// 添加页面滚动事件
window.onscroll = function(){
    // 判断卷动的距离，如果超过10像素，让header高度变低，让返回顶部按钮出现
    if( document.documentElement.scrollTop > 10){
        header.className = "header fixed";  //保留原类名，增加新类名
        backtop.style.display = "block";
    } else if( document.documentElement.scrollTop <= 10){
        header.className = "header";  
        backtop.style.display = "none";
    }

};
// 定义一个变量存储定时器
var timer;
// 2.点击返回顶部，让页面以动画的方式跳转到页面顶部
backtop.onclick = function(){
 //终点
 var target = 0;
 //起始点
var current = document.documentElement.scrollTop;
// 步长
var step = 30;
timer = setInterval(function(){
// 获取当前卷动的值，每次递减一个步长
current-=step;
// 停止定时器
if(current <= target){
    current = target;
    clearInterval(timer);
}
// 重新赋值
document.documentElement.scrollTop = current;
},10);
}