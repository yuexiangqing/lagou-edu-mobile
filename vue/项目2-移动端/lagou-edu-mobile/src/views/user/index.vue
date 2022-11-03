<template>
  <div class="user">
用户页面
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'UserIndex',
  created () {
    request({
      method: 'GET',
      url: '/front/user/getInfo'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
