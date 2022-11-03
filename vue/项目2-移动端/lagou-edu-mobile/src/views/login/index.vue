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
       <van-button round block type="info" native-type="submit">提交</van-button>
     </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    phoneCheck (value) {
      return /^1\d{10}$/.test(value)
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    onSubmit () {
      console.log('Submit!')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
