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
    @click="onSubmit"
    >登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 存储表单数据的对象
      form: {
        phone: '',
        password: ''
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
      }
    }
  },
  methods: {
    // 登录功能
    async onSubmit () {
      // this.$refs.form.validate(valid => {
      // console.log(valid)
      try {
        // 设置校验成功后的功能（请求）
        await this.$refs.form.validate()
        console.log('通过了校验')
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
