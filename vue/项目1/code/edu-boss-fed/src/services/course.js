import request from '@/utils/request'

// 分页查询课程信息
export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}
// 课程上下架接口
// 要注意请求方式为GET的发送方式（两个值）
// export const changeState = data => {
export const changeState = params => {
  return request({
    method: 'GET',
    url: '/boss/course/changeState',
    // params: data
    // params: params
    params
  })
}

// 保存或更改课程信息接口
export const saveOrUpdateCourse = data => {
  return request({
    method: 'POST',
    url: '/boss/course/saveOrUpdateCourse',
    data
  })
}

// 上传图片接口
export const uploadCourseImage = (data, onUploadProgress) => {
  // 注意： data 应当为 FormData 对象
  return request({
    method: 'POST',
    url: '/boss/course/upload',
    data,
    // onUploadProgress 用于检测上传进度
    // onUploadProgress (event) {
    //   console.log(event.total, event.loaded)
    // }
    onUploadProgress
  })
}

// 通过课程ID 获取课程信息接口
export const getCourseById = courseId => {
  return request({
    method: 'GET',
    url: '/boss/course/getCourseById',
    params: {
      courseId
    }
  })
}
