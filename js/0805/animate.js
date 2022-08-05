
  // box是需要运动的元素
        // 多属性运动
        // 共同点：总时间、时间间隔是相同的（自定义）
        // 不同点：起始位置（通过程序方法自动获取当前页面最终显示效果）和结束位置（自定义指定的）


        // 函数参数 （所有需要自定义的都可以作为参数）
        // 参数1:元素对象，它要进行运动
        // 参数2：结束位置 ，以对象数据方式传递
        // 参数3：总时间

        
    function animate(ele, end, time) {
    // 已知结束位置，总时间，时间间隔50，缺少起始位置
    // 起始位置要根据结束位置提供的属性进行获取
    // 起始位置的对象，需要先定义一个空对象
    var now = {};
    // start.left = 100;
    // 对象遍历：获取属性名
    for (var k in end) {
        now[k] = parseFloat(window.getComputedStyle(ele)[k]);
    }
    // console.log(now);
    //自定义时间间隔
    var interval = 50;
    // 计算总次数
    var maxcount = time / interval;
    // 次数累加器
    var count = 0;
    // 对象中的每个属性都有自己的步长，也可以放到一个步长对象中
    var step = {};
    // 遍历结束对象，计算每个属性的步长
    for (var k in end) {
        step[k] = (end[k] - now[k]) / maxcount;
    }
    // console.log(step);
    // =====================准备工作结束，开启定时器=============================
    var timer;
    timer = setInterval(function () {
        // 让每个属性发生变化，赋值个now对象中的每一项
        for (var k in end) {
            now[k] += step[k];
        }
        // 累计运动次数
        count++;
        // 判断定时器是否结束
        if (count > maxcount) {
            // 拉终停表
            for (var k in end) {
                now[k] = end[k];
            }
            clearInterval(timer);
        }
        // 赋值给对应元素对象
        for (var k in end) {
            // 判断：如果是不透明属性 ，不要加px单位
            if (k === "opacity") {
                ele.style[k] = now[k];
            } else {
                ele.style[k] = now[k] + "px";
            }
        }
    }, interval);

}
