<template>
  <div class="pay">
    <van-cell-group>
        <!-- 课程信息 -->
      <van-cell class="course-info">
        <img :src="course.courseImgUrl" alt="">
        <div class="price-info">
            <div class="course-name" v-text="course.courseName"></div>
            <div class="discounts">￥ {{course.discounts}}</div>
        </div>
      </van-cell>
      <!-- 账户信息 -->
      <van-cell class="account-info">
        <div>购买信息</div>
        <div>购买课程后使用此账号登录【拉勾教育】学习课程</div>
        <div class="username">当前账号:{{username}}</div>
      </van-cell>
      <!-- 支付方式 -->
      <van-cell class="pay-channel">
        <div class="title">支付方式</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { getCourseById } from '@/services/course'
export default {
  name: 'PayIndex',
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
  },
  computed: {
    username () {
      return this.$store.state.user.organization.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    }
  }
}
</script>

<style scoped lang="scss">
.pay {
    position: absolute;
    width: 100%;
    height: 100%;
}
.van-cell-group {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.course-info {
    height: 170px;
    padding: 40px 20px 0;
    margin-bottom: 10px;
}
.course-info img {
    width: 80px;
    height: 107px;
    border-radius: 10px;
}
.course-info .van-cell__value {
    display: flex;
}
.course-info .price-info {
    height: 107px;
    padding: 5px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.price-info .course-name {
    font-size: 16px;
}
.price-info .discounts {
    font-size: 22px;
    font-weight: 700;
    color: #ff7452;
}
.account-info{
    height: 120px;
    margin-bottom: 10px;
}
.account-info div:nth-child(2){
    font-size: 12px;
    color: #999;
}
.account-info .username{
    margin-top: 20px 0 10px;
    font-size: 16px;
}
</style>
