<template>
  <div class="learn">
    <!-- 顶部功能 -->
    <van-nav-bar title="已购课程"/>
    <!-- 课程列表 -->
    <!-- 底部导航 -->
     <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
export default {
  name: 'LearnIndex',
  components: {
    LayoutFooter
  }
}
</script>

<style scoped lang="scss">

</style>
