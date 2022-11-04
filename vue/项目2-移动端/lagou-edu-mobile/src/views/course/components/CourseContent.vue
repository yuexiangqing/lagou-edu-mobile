<template>
  <div class="course-content">
    <!-- 顶部的轮播设置 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
      <van-swipe-item v-for="item in activeAdList" :key="item.id">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 底部课程列表 -->
    <course-content-list
    :fetch-data="fetchData"
    ></course-content-list>
  </div>
</template>

<script>
import { getAllAds, getQueryCourses } from '@/services/course'
import CourseContentList from '@/components/CourseContentList'
export default {
  name: 'CourseContent',
  components: {
    CourseContentList
  },
  data () {
    return {
      // 轮播图图片列表
      adList: []
    }
  },
  created () {
    // 请求轮播图图片信息
    this.loadAds()
    // 将 接口 设置给 fetchData
    // this.fetchData = getQueryCourses
  },
  methods: {
    fetchData (options) {
      return getQueryCourses(options)
    },
    async loadAds () {
      // 此处的999代表了首页顶部轮播图的广告位
      const { data } = await getAllAds({
        spaceKeys: 999
      })
      // 存储到 adList 里面
      this.adList = data.content[0].adDTOList
    }
  },
  computed: {
    activeAdList () {
      return this.adList.filter(item => item.status === 1)
    }
  }
}
</script>

<style scoped lang="scss">
.my-swipe {
    width: 100%;
}
.my-swipe .van-swipe-item {
    display: flex;
    justify-content: center;
}
.my-swipe img {
    height: 170px;
}
.course-content-list {
  top: 220px;
  bottom: 50px;
}
</style>
