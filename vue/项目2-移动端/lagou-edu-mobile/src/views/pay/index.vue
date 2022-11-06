<template>
  <div class="pay">
    <van-cell-group>
        <!-- 课程信息 -->
      <van-cell class="course-info">
        <img src="xxx.png" alt="">
        <div class="price-info">
            <div class="course-name">示例课程名称</div>
            <div class="discounts">￥ 666</div>
        </div>
      </van-cell>
      <!-- 账户信息 -->
      <van-cell class="account-info">
        <div>购买信息</div>
        <div>购买课程后使用此账号登录【拉勾教育】学习课程</div>
        <div class="username">当前账号:6666</div>
      </van-cell>
      <!-- 支付方式 -->
      <van-cell class="pay-channel">
        <div class="title">支付方式</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'PayIndex'
}
</script>

<style scoped lang="scss">
.pay {
    position: absolute;
    width: 100%;
    height: 100%;
}
.van-cell-group {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.course-info {
    height: 170px;
    padding: 40px 20px 0;
    margin-bottom: 10px;
}
.course-info img {
    width: 80px;
    height: 107px;
    border-radius: 10px;
}
.course-info .van-cell__value {
    display: flex;
}
.course-info .price-info {
    height: 107px;
    padding: 5px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.price-info .course-name {
    font-size: 16px;
}
.price-info .discounts {
    font-size: 22px;
    font-weight: 700;
    color: #ff7452;
}
.account-info{
    height: 120px;
    margin-bottom: 10px;
}
.account-info div:nth-child(2){
    font-size: 12px;
    color: #999;
}
.account-info .username{
    margin-top: 20px 0 10px;
    font-size: 16px;
}
</style>
