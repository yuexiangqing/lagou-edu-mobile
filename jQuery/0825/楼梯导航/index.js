// 获取侧边栏的li
var $lis = $(".subnav ul li")
// 获取第一层顶部距离顶部的高度
var v1 = $(".jia").offset().top;
// 获取第二层顶部距离顶部的高度
var v2 = $(".dian").offset().top;
// 获取第三层顶部距离顶部的高度
var v3 = $(".fu").offset().top;
// 获取第四层顶部距离顶部的高度
var v4 = $(".mei").offset().top;
// 添加页面滚动事件
$(document).scroll(function(){
    // 判断卷走的距离是否大于等于第一层距离顶部的高度
    // 如果大于让侧边栏导航显示，否则隐藏
    var v = $(this).scrollTop()
    if(v>=1){
        $(".subnav").show()
    } else{
        $(".subnav").hide()
    }

    // 在滚动过程中，需要判断处于哪个楼层
    // 让对应的导航的li标签高亮显示，其他的默认
    // 因为会跳楼 所以可以倒着写 或者分开写 但是不能用多分支语句
    if(v >= v1){
        $lis.eq(0).addClass("current").siblings().removeClass("current")
    } 
    if(v >=v2){
        $lis.eq(1).addClass("current").siblings().removeClass("current")
    }
    if(v >=v3){
        $lis.eq(2).addClass("current").siblings().removeClass("current")
    }
    if(v >=v4){
        $lis.eq(3).addClass("current").siblings().removeClass("current")
    }
})

// 给导航添加点击事件
$lis.click(function(){
    // 获取用户点击的楼层的下标
    var idx = $(this).index()
    // 找到对应的楼层，获取这个楼层距离顶部的高度
    var value = $(".louceng .jd").eq(idx).offset().top;
    // 给页面添加一个运动效果，让运动到指定的楼层位置
    $("html,body").animate({"scrollTop":value},500)
})