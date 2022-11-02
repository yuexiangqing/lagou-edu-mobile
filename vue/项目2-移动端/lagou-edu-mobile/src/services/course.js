import request from '@/utils/request'

// 获取广告位及其对应广告
export const getAllAds = params => {
  return request({
    method: 'GET',
    url: '/front/ad/getAllAds',
    params
  })
}
