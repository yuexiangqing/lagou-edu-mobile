<template>
  <div class="course-content-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
  </div>
</template>

<script>
import { getQueryCourse } from '@/services/course'
export default {
  name: 'CourseContentList',
  data () {
    return {
      // 用于存储数据
      list: [],
      // 是否处于加载中
      loading: false,
      // 是否加载完毕
      finished: false,
      // 数据页数
      currentPage: 1
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getQueryCourse({
        currentPage: this.currentPage,
        pageSize: 10,
        // 代表上架课程
        status: 1
      })
      console.log(data)
      // 下次请求下一页
      this.currentPage++
      // 加载状态结束
      this.loading = false
      // 数据全部加载完成
      if (data.data.records.length < 10) {
        this.finished = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.course-content-list {
  position: fixed;
  overflow-y: auto;
  // top: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
