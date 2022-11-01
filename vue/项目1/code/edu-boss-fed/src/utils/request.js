/* eslint-disable no-unused-vars */
import axios from 'axios'
// 这里的create 是利用它来创建一个axios实例，而create里面可以传入一个对象，这个对象用来对axios进行配置处理
import store from '@/store'
// 通过局部引入方式，引入 Element 的 Message 的组件功能
import { Message } from 'element-ui'
// 这个类似于 this.$message
// 引入 router
import router from '@/router'
// 引入 qs 用于进行请求参数处理
import qs from 'qs'

// create 创建了 axios 的实例
const request = axios.create({
  // timeout: 2000
// baseURL:
// headers:
})
function getBaseURL (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    return 'http://edufront.lagounews.com'
  }
}
// 请求拦截器
request.interceptors.request.use(function (config) {
// 判断config.url的前缀，来进行请求 baseurl 的设置
// eslint-disable-next-line no-undef
  config.baseURL = getBaseURL(config.url)
  // 统一设置 Token 信息设置
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }

  return config
})

function redirectLogin () {
  // 跳转到登录页
  router.push({
    name: 'login',
    query: {
      // currentRoute 相当于存储了路由信息的对象 $router
      redirect: router.currentRoute.fullPath
    }
  })
}

// 存储是否正在更新 Token 的状态
let isRefreshing = false
// 存储因为等待 Token 刷新而挂起的请求
let requests = []
// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 状态码 2xx 会执行这里
  console.log('响应成功了', response)
  return response
}, function (error) {
  if (error.response) {
    // 请求发送成功，响应接收完毕，但状态码为 失败的情况
    // 1.判断失败的状态码情况（主要处理 401 的情况）
    const { status } = error.response
    let errorMessage = ''
    if (status === 400) {
      errorMessage = '请求参数错误'
    } else if (status === 401) {
      // 1. 无 Token 信息
      if (!store.state.user) {
        // 跳转登录页
        redirectLogin()
        return Promise.reject(error)
      }
      // 检测是否已经存在了正在刷新 Token 的请求
      if (isRefreshing) {
        // 将当前失败的请求，存储到请求列表中
        return requests.push(() => {
          // 当前函数调用后，会自动发送本次失败的请求
          request(error.config)
        })
      }
      isRefreshing = true
      // 2. Token 无效（错误 Token，过期 Token)
      // 发送请求，获取新的 access_token
      return request({
        method: 'POST',
        url: '/front/user/refresh_token',
        data: qs.stringify({
          refreshtoken: store.state.user.refresh_token
        })
      }).then(res => {
        // 刷新 token 失败
        if (res.data.state !== 1) {
          // 清除无效的用户信息
          store.commit('setUser', null)
          // 跳转到登录页
          redirectLogin()
          return Promise.reject(error)
        }
        // 刷新 token 成功
        // 存储新的 token
        store.commit('setUser', res.data.content)
        // 重新发送失败的请求
        // error.config 是本次失败的请求的配置对象
        // return request(error.config)
        // 根据 requests 发送所有失败的请求
        requests.forEach(callback => callback())
        // 发送完毕，清除 requests 内容即可
        requests = []
        // 将本次请求发送
        return request(error.config)
      }).catch(err => {
        console.log(err)
      }).finally(() => { // 无论如何都会执行
        // 请求发送完毕，响应处理完毕，将刷新状态更改为 false 即可
        isRefreshing = false
      })
    } else if (status === 403) {
      errorMessage = '没有权限，请联系管理员'
    } else if (status === 404) {
      errorMessage = '请求资源不存在'
    } else if (status >= 500) {
      errorMessage = '服务端错误，请联系管理员'
    }
    Message.error(errorMessage)
  } else if (error.request) {
    // 请求发送成功，但是未收到响应
    Message.error('请求超时，请重试')
  } else {
    // 意料之外的错误
    Message.error(error.Message)
  }
  // 将本次请求的错误对象继续向后抛出，让接收响应的处理函数进行操作
  return Promise.reject(error)
})

export default request
