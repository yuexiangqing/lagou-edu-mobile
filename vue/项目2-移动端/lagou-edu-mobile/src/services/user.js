import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    // URLSearchParams 可以将名=值 & 名=值的结构，转化
    data: new URLSearchParams(data).toString()
  })
}
