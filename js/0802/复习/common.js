// 定义一个获取元素的函数
function my$(id){
    return document.getElementById(id);
}

 // 自己制作一个兼容所有浏览器的绑定事件的函数
        // 参数：事件源 事件类型 事件函数
        function addEvent(ele, type, fn) {
            // IE9及以上的浏览器和其他浏览器。使用addEventListener方法
            // 浏览器能力检测
            // IE9以下的浏览器 ，使用attachEvent方法
            if (ele.addEventListener) {
                ele.addEventListener(type, fn);
            } else if (ele.attachEvent) {
                ele.attachEvent("on" + type, fn);
            }
        }


        // 兼容所有浏览器的 解除绑定事件的函数
        // 参数：事件源 事件类型 事件函数
        function removeEvent(ele, type, fn) {
            // 浏览器能力判断
            if (ele.removeEventListener) {
                ele.removeEventListener(type, fn);
            } else if (ele.detachEvent) {
                ele.detachEvent("on" + type, fn);
            }
        }