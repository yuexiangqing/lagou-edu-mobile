/* eslint-disable no-unused-vars */
import axios from 'axios'
// 这里的create 是利用它来创建一个axios实例，而create里面可以传入一个对象，这个对象用来对axios进行配置处理

// create 创建了 axios 的实例
const request = axios.create({
  timeout: 2000
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
  return config
})
export default request
