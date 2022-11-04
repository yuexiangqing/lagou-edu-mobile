<template>
  <div class="course-info">
    <van-cell-group>
      <!-- 课程图片 -->
      <van-cell class="course-img">
        <img :src="course.courseImgUrl" alt="">
      </van-cell>
      <!-- 课程描述 -->
      <van-cell class="course-description">
        <!-- 课程名称 -->
        <h2 v-text="course.courseName"></h2>
        <!-- 课程概述 -->
        <p v-text="course.previewFirstField"></p>
        <!-- 课程销售信息 -->
        <div class="course-sale-info">
            <p class="course-price">
                <span class="discounts">￥{{course.discounts}}</span>
                <span>￥{{course.price}}</span>
            </p>
            <span class="tag">{{course.sales}}人已购</span>
            <span class="tag">每周三、五更新</span>
        </div>
      </van-cell>
      <!-- 课程详细内容 -->
      <van-cell class="course-detail">
        <van-tabs sticky title-active-color="red" scrollspy>
          <van-tab title="详情">
            <!-- 课程详情信息在后台是通过富文本编辑器设置的，内容为 HTML 文本 -->
            <div v-html="course.courseDescription"></div>
          </van-tab>
          <van-tab title="内容">内容</van-tab>
        </van-tabs>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getCourseById } from '@/services/course'
export default {
  name: 'CourseInfo',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      // 课程信息
      course: {}
    }
  },
  created () {
    this.loadCourse()
  },
  methods: {
    async loadCourse () {
      const { data } = await getCourseById({
        courseId: this.courseId
      })
      this.course = data.content
    }
  }
}
</script>

<style scoped lang="scss">
// 课程图片区域
.van-cell{
    padding: 0;
}
.course-img {
    height: 280px;
}
// 课程描述区域
.course-description {
    padding: 10px 20px;
    height: 150px;
}
.course-sale-info {
    display: flex;
}
.course-sale-info .course-price{
    flex: 1;
    margin: 0;
}
.course-price .discounts {
    color: #ff7452;
    font-size: 24px;
    font-weight: 700;
}
.course-sale-info .tag {
    background-color: #f8f9fa;
    font-size: 12px;
    font-weight: 700;
    color: #666;
    margin-left: 10px;
    padding: 7px;
    line-height: 15px;
    border-radius: 2px;
}
</style>
