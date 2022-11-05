<template>
  <div class="course-video">
    <!-- 导航 -->
    <van-nav-bar
      title="视频"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    ></van-nav-bar>
  </div>
</template>

<script>
import { getVideoInfo } from '@/services/course'
export default {
  name: 'CourseVideo',
  props: {
    lessonId: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      // 视频信息
      videoInfo: {}
    }
  },
  created () {
    this.loadVideo()
  },
  methods: {
    async loadVideo () {
      const { data } = await getVideoInfo({
        lessonId: this.lessonId
      })
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
