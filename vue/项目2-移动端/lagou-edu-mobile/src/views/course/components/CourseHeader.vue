<template>
  <div class="course-header">
    <van-image
    :src="require('@/assets/logo.png')"
    ></van-image>
  </div>
</template>

<script>
export default {
  name: 'CourseHeader'
}
</script>

<style scoped lang="scss">
.course-header {
   height: 50px;
}
.van-image{
    width: 180px;
    margin-left: -20px;
}
</style>
