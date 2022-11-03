<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
