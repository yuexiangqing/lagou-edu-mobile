// 使用自调用函数关注作用域
(function () {
  // 全局变量 方便更改
  var ps = "absolute";
  // 创建一个蛇的构造函数
  function Snake(option) {
    // 为了避免传入的参数数据类型不对，或者没有传参
    option = option instanceof Object ? option : {};
    // 给对象添加属性
    // 设置蛇节的宽度和高度属性
    this.width = option.width || 20;
    this.height = option.height || 20;
    // 蛇身的数据
    this.body = [
      { x: 3, y: 2, color: "red" },
      { x: 2, y: 2, color: "blue" },
      { x: 1, y: 2, color: "blue" },
    ];

    // 设置蛇移动的方向.还可以设置为left ,top ,bottom
    this.direction = "right";
    // 添加一个元素的数组，存储所有渲染的div元素
    this.elements = [];
  }
  //添加一个将元素渲染到页面上的方法
  Snake.prototype.render = function (map) {
    // 生成对应个数的div元素
    // 遍历数组

    for (var i = 0, len = this.body.length; i < len; i++) {
      // 根据数组的每一项的数据生成一个div元素
      var piece = this.body[i];
      // 创建新元素
      var ele = document.createElement("div");
      // 添加样式
      ele.style.width = this.width + "px";
      ele.style.height = this.height + "px";
      ele.style.left = piece.x * this.width + "px";
      ele.style.top = piece.y * this.height + "px";
      ele.style.position = ps;
      ele.style.backgroundColor = piece.color;
      //   渲染到指定的父级内部
      map.appendChild(ele);
      //将添加的新元素存储在数组里
      this.elements.push(ele);
    }
  };
  //蛇运动的方法
  Snake.prototype.move = function () {
    // 蛇身的每一节都要变成上一节的位置
    // 循环要从最后一项开始，为了避免前面的数据提前发生变化
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // 存储一下蛇头的数据
    var head = this.body[0];
    // 蛇头要根据方向进行变动
    switch (this.direction) {
      case "right":
        head.x += 1;
        break;
      case "left":
        head.x -= 1;
        break;
      case "top":
        head.y -= 1;
        break;
      case "bottom":
        head.y += 1;
    }
  };
  //删除上一次渲染的蛇的所有div元素
  Snake.prototype.remove = function(map){
  //遍历数组删除所有元素
  //将元素从html结构中删掉
  for(var i = this.elements.length - 1;i >= 0;i--){
    map.removeChild(this.elements[i]);
  }
  //数组也需要清空
  this.elements = [];
  }
  // 通过window暴露构造函数
  window.Snake = Snake;
})();

// 测试
// var map = document.getElementById("map");
// var snake = new Snake();
// snake.render(map);
