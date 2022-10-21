<template>
    <div class="app-header">
<!-- 左侧面包屑导航 -->
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
<!-- 右侧用户信息展示 -->
    <el-dropdown>
        <span class="el-dropdown-link">
          <!--用户头像，使用了Avatar 组件  -->
          <!-- 注意：如果以后用图片的时候，用在线的图片，写成固定值的话，可以不用v-bind -->
          <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
  </template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-header{
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
.el-dropdown-link{
display: flex;
align-items: center;
}
}
</style>
