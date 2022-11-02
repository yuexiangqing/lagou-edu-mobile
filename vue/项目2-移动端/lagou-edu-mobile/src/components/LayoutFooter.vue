<template>
  <div class="layout-footer">
    <van-tabbar route>
      <van-tabbar-item replace to="/course" icon="eye-o">选课</van-tabbar-item>
      <van-tabbar-item replace to="/learn" icon="edit">学习</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style scoped lang="scss">

</style>
