<template>
  <div class="layout-footer">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="eye-o">选课</van-tabbar-item>
      <van-tabbar-item replace to="/learn" icon="edit">学习</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'LayoutFooter',
  components: {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem
  }
}
</script>

<style scoped lang="scss">

</style>
