<template>
  <div class="course-info">
 课程的 ID 为：{{courseId}}
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
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
