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
export default {
  name: 'CourseContentList',
  data () {
    return {
      // 用于存储数据
      list: [1, 2, 3, 4, 5],
      // 是否处于加载中
      loading: false,
      // 是否加载完毕
      finished: false
    }
  },
  methods: {
    onLoad () {
      console.log('发送数据请求')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
