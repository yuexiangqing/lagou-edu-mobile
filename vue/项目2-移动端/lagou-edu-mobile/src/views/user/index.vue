<template>
  <div class="user">
    <!-- 顶部功能 -->
    <van-cell-group>
      <!-- 用户信息区域 -->
      <van-cell class="user-info">
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
.user-info {
  padding: 30px 20px;
  background-color: rgb(248, 150, 3);
}
.van-cell__value {
  display: flex;
}
.user-info-content {
  padding-left: 15px;
}
.user-info-content h3{
  margin: 5px;
  font-size: 18px;
}
</style>
