<template>
  <div class="user">
    <!-- 顶部功能 -->
    <van-cell-group>
      <!-- 用户信息区域 -->
      <van-cell class="user-info" :border="false">
        <!-- 头像 -->
        <van-image
        width="50"
        height="50"
        round
        src="https://s0.lgstatic.com/common/image/pc/default_boy_headpic1.png"
        ></van-image>
        <!-- 用户信息内容 -->
        <div class="user-info-content">
          <h3>昵称</h3>
          <span>
            <van-icon name="edit"/>
            编辑个人资料
          </span>
        </div>
      </van-cell>
      <!-- 账户信息 -->
      <van-cell class="account-info">
        <van-grid :border="false">
          <van-grid-item>
            <span class="grid-item-value">14.05</span>
            <span>学习时长</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">200</span>
            <span>钱包/勾豆</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">1</span>
            <span>优惠券</span>
          </van-grid-item>
          <van-grid-item>
            <span class="grid-item-value">213</span>
            <span>学分</span>
          </van-grid-item>
        </van-grid>
      </van-cell>
    </van-cell-group>
    <!-- 底部导航 -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
export default {
  name: 'UserIndex',
  components: {
    LayoutFooter
  }
}
</script>

<style scoped lang="scss">
// 用户信息
.user-info {
  padding: 30px 20px 0;
  background-color: rgb(248, 150, 3);
}
.user-info .van-cell__value {
  display: flex;
}
.user-info-content {
  padding-left: 15px;
}
.user-info-content h3{
  margin: 5px;
  font-size: 18px;
}

// 账户信息
.account-info {
  background-color: rgb(248, 150, 3);
}
.account-info .van-grid {
  border-radius: 10px;
  overflow: hidden;
}
.account-info .grid-item-value {
  font-size: 22px;
  font-weight: 700;
}
</style>
