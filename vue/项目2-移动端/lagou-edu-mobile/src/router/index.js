import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Course from '@/views/course'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  // 首页（选课页）
  {
    path: '/',
    name: 'course',
    component: Course
  },
  // 学习页
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: 'learn' */'@/views/learn/index'),
    meta: { requiresAuth: true }
  },
  // 用户页
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user/index'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})

// 设置导航守卫，进行登录检测与跳转
router.beforeEach((to, from, next) => {
  // 验证 to 的路由是否需要身份认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 验证 Vuex 的 store 中是否存储了用户登录信息
    if (!store.state.user) {
      // 如果没有，就是未登录，跳转到登录页面
      return next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    // 已经登录，允许通过
    next()
  } else {
    next()
  }
})

export default router
