<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
     <van-field
       v-model="form.phone"
       name="phone"
       label="手机号"
       placeholder="请输入手机号"
       :rules="[
        {
          required: true,
          message: '请填写手机号'
        },
        {
          // 使用函数的方式来校验
          validator: phoneCheck,
          message: '格式有误，请重新输入'
        }
        ]"
     />
     <van-field
       v-model="form.password"
       type="password"
       name="password"
       label="密码"
       placeholder="请输入密码"
       :rules="[
        {
          required: true, message: '请填写正确的密码'
        },
        {
          // 直接使用正则来校验
          pattern: /^[a-zA-Z0-9]{6,12}$/,
          message: '格式有误，请重新输入'
        }
          ]"
     />
     <div style="margin: 16px;">
       <van-button
       round
       block
       type="info"
       native-type="submit"
       :loading="isLoading"
       >登录</van-button>
     </div>
    </van-form>
  </div>
</template>

<script>
import { NavBar, Form, Button, Field, Toast } from 'vant'
import { login } from '@/services/user'
export default {
  name: 'LoginIndex',
  components: {
    VanNavBar: NavBar,
    VanForm: Form,
    VanButton: Button,
    VanField: Field
  },
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      // 登录按钮加载状态
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      const { data } = await login(this.form)
      if (data.state === 1) {
        // this.$toast.success('登录成功')
        Toast.success('登录成功')
        // 将用户信息存储到 state 中
        this.$store.commit('setUser', data.content)
        // 跳转
        this.$router.push(this.$route.query.redirect || '/')
      } else {
        // this.$toast.fail('登录失败')
        Toast.fail('登录失败')
      }
      // 取消加载状态
      this.isLoading = false
    },
    phoneCheck (value) {
      return /^1\d{10}$/.test(value)
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
