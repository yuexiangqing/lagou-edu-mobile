import store from '@/store'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://edufront.lagounews.com'
})

// 设置请求拦截器，进行接口健全
request.interceptors.request.use(config => {
  const { user } = store.state
  // 检测 user 是否存在
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
})

export default request
