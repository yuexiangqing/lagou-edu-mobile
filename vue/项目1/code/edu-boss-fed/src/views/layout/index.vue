<template>
<el-container>
  <el-aside width="200px">
<!-- 侧边栏组件 -->
<app-aside></app-aside>
  </el-aside>
  <el-container>
    <el-header>
<!-- 头部组件 -->
<app-header></app-header>
    </el-header>
    <el-main>
  <!-- 设置子路由的出口 -->
    <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// 引入侧边栏组件
import AppAside from './components/AppAside.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'VueLayout',
  components: {
    AppAside,
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.el-container{
height: 100vh;
min-width: 980px;
}
.el-aside{
background-color: #d3bce6;
}
.el-header{
background-color: #fff;
}
.el-main{
background-color: #e9eef3;
}
</style>
