<template>
  <div class="course">
    <course-header></course-header>
    <course-content></course-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import CourseHeader from './components/CourseHeader'
import CourseContent from './components/CourseContent'
import layoutFooter from '@/components/LayoutFooter'
export default {
  name: 'CourseIndex',
  components: {
    CourseHeader,
    CourseContent,
    layoutFooter
  }
}
</script>

<style scoped lang="scss">

</style>
