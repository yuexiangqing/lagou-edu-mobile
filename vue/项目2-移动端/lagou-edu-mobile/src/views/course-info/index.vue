<template>
  <div class="course-info">
 课程的 ID 为：{{courseId}}
  </div>
</template>

<script>
export default {
  name: 'CourseInfo',
  props: {
    courseId: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
