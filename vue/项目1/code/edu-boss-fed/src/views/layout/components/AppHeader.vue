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
          :src="userInfo.portrait || 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
          ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{userInfo.userName}}</el-dropdown-item>
          <el-dropdown-item
          divided
          @click.native="handleLogout"
          >退出</el-dropdown-item>
        </el-dropdown-menu>
        <!-- 给组件绑定的事件都是自定义事件，现在这儿设置的不是原生的 click 事件，可以通过 .native 表示当前这个事件是一个原生事件，就会设置个这个组件的根元素 -->
    </el-dropdown>
    </div>
  </template>

<script>
// 引入用户信息接口功能
import { getUserInfo } from '@/services/user'
export default {
  name: 'AppHeader',
  created () {
    // 加载用户信息
    this.loadUserInfo()
    // 下面是为了进行功能测试演示
    this.loadUserInfo()
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    // 加载用户信息功能
    async loadUserInfo () {
      const { data } = await getUserInfo()
      this.userInfo = data.content
    },
    // 退出功能
    handleLogout () {
      this.$confirm('确认退出吗?', '退出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // console.log('进行退出操作')
      // 1.清除 store 中的用户信息
        this.$store.commit('setUser', null)
        // 2.跳转到登录页
        this.$route.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
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
