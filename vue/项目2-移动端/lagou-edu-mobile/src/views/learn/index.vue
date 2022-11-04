<template>
  <div class="learn">
    <!-- 顶部功能 -->
    <van-nav-bar title="已购课程"/>
    <!-- 课程列表 -->
    <course-content-list
    :fetch-data="fetchData"
    ></course-content-list>
    <!-- 底部导航 -->
     <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
import CourseContentList from '@/components/CourseContentList'
import { getPurchaseCourse } from '@/services/course'
export default {
  name: 'LearnIndex',
  components: {
    LayoutFooter,
    CourseContentList
  },
  methods: {
    fetchData () {
      return getPurchaseCourse()
    }
  }
}
</script>

<style scoped lang="scss">
.course-content-list {
  top: 50px;
  bottom: 50px;
}
</style>
