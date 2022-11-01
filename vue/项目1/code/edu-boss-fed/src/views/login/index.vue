<template>
  <div class="login">
    <el-form ref="form"
    :model="form"
    :rules="rules"
    label-width="80px"
    labelPosition="top"
    >
  <el-form-item
  label="手机号"
  prop="phone"
  >
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
  <el-form-item
  label="密码"
  prop="password"
  >
    <el-input v-model="form.password"
    type="password"
    ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button
    type="primary"
    :loading="isLoginLoading"
    @click="onSubmit"
    >登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
// import request from '@/utils/request'
//  qs 用于数据格式的转换，可以将 请求里面的url 变为 urlencoded 格式：名 = 值 & 名 = 值
// import qs from 'qs'
// 引入封装的接口功能组件,可以用结构的方式，如果还想加别的，在login后面，用 ， 添加即可
import { login } from '@/services/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 存储表单数据的对象
      form: {
        phone: '18201288771',
        password: '111111'
      },
      // 用于设置校验规则的对象
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为6-18位', trigger: 'blur' }
        ]
      },
      // 用于保存加载状态
      isLoginLoading: false
    }
  },
  methods: {
    // 登录功能
    async onSubmit () {
      // this.$refs.form.validate(valid => {
      // console.log(valid)
      // this.$store.commit('jia')
      // this.$store.commit('jia', 5)

      // this.$store.commit('jia', {
      //   count: 5,
      //   delay: 2000
      // })
      // this.$store.commit('jia', {
      //   count: 2,
      //   delay: 1000
      // })
      // this.$store.commit('jia', {
      //   count: 1,
      //   delay: 500
      // })

      // 这里的参数：第一个是 actions 的名字，执行actions，要用dispatch
      this.$store.dispatch('jiaHandle', { count: 5, delay: 2000 })
      this.$store.dispatch('jiaHandle', { count: 2, delay: 1000 })
      this.$store.dispatch('jiaHandle', { count: 1, delay: 5000 })

      try {
        // 1.设置校验成功后的功能（请求）
        await this.$refs.form.validate()
        // console.log('通过了校验')
        // 2.发送请求
        // 登录成功时
        this.isLoginLoading = true
        // console.log(qs.stringify(this.form))
        // 通过结构的方式获取数据
        // const { data } = await request({
        //   method: 'POST',
        //   // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //   url: '/front/user/login',
        //   // urlencoded 格式：名 = 值 & 名 = 值
        //   // data: {
        //   //   phone: this.form.phone,
        //   //   password: this.form.password
        //   // }
        //   data: qs.stringify(this.form) // 因为里面读取的时候，就是读取 form 里面的值

        // })
        // 这里的参数，只需要传入请求参数就可以了 this.form
        const { data } = await login(this.form)
        // 登录失败时
        this.isLoginLoading = false
        // 3.响应处理,如果成功就跳转到首页上
        if (data.state === 1) {
          // this.$router.push({
          //   name: 'home'
          // })
          // $message是里面的组件，如果要使用，参考element
          this.$message.success('登录成功')
          // 将用户信息存储到 Vuex 中
          this.$store.commit('setUser', data.content)
          // 根据可能存在的 redirect 数据进行跳转设置
          // 前面这个 $router 是跳转的，后面这个$route 是当前这个路由
          this.$router.push(this.$route.query.redirect || '/')
        } else {
          this.$message.error('登录失败')
        }
      } catch (err) {
        // 设置校验失败后的功能 （提示）
        console.log('没有通过校验')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  display: flex;
  // 设置内部元素垂直水平居中
  justify-content: center;
  align-items: center;
  .el-form{
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    .el-button{
      width: 100%;
    }
  }
}
</style>
