<template>
  <div class="course-section">
    <h2 class="section" v-text="sectionData.sectionName"></h2>
    <!-- 课时列表 -->
    <p
    class="lesson"
    v-for="item in sectionData.courseLessons"
    :key="item.id"
    >
    <span v-text="item.theme"></span>
    <van-icon v-if="item.canPlay" name="play-circle"  size="15"></van-icon>
    <van-icon v-else name="lock"  size="15"></van-icon>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CourseSection',
  props: {
    sectionData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.course-section {
    padding: 0 20px;
}
.lesson {
    display: flex;
    line-height: 20px;
    justify-content: space-between;
}

</style>
