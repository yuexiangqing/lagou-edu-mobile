/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入 store
import store from '@/store'

// 引入路由中需要使用的组件功能(@代表的是src目录)
// import Login from '@/views/login/index.vue'
// import Login from '@/views/login/index'
// import Layout from '@/views/layout/index'
// import Home from '@/views/home/index'
// import Role from '@/views/role/index'
// import Menu from '@/views/menu/index'
// import Resource from '@/views/resource/index'
// import Course from '@/views/course/index'
// import User from '@/views/user/index'
// import Advert from '@/views/advert/index'
// import AdvertSpace from '@/views/advert-space/index'
// import ErrorPage from '@/views/error-page/index'

// 固定书写
Vue.use(VueRouter)

// 路由规则（添加需要认证的 requiresAuth 信息）
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index'),
    // 直接给某个路由设置，内部的子路由需要认证（包含当前路由）
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: 'home' */'@/views/home/index')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: 'role' */'@/views/role/index')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: 'menu' */'@/views/menu/index')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName: 'resource' */'@/views/resource/index')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName: 'course' */'@/views/course/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: 'user' */'@/views/user/index')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName: 'advert' */'@/views/advert/index')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName: 'advert-space' */'@/views/advert-space/index')
      },
      // 添加菜单路由组件
      {
        path: '/menu/create',
        name: 'menu-create',
        component: () => import(/* webpackChunkName: 'menu-create' */'@/views/menu/create')
      },
      // 编辑菜单路由组件
      {
        path: '/menu/:id/edit',
        name: 'menu-edit',
        component: () => import(/* webpackChunkName: 'menu-edit' */'@/views/menu/edit')
      },
      // 分配菜单路由组件
      {
        path: '/role/:roleId/alloc-menu',
        name: 'alloc-menu',
        component: () => import(/* webpackChunkName: 'alloc-menu' */'@/views/role/alloc-menu'),
        props: true
      },
      // 添加课程组件
      {
        path: '/course/create',
        name: 'course-create',
        component: () => import(/* webpackChunkName: 'course-create' */'@/views/course/create')
      },
      // 编辑课程组件
      {
        path: '/course/:courseId/edit',
        name: 'course-edit',
        component: () => import(/* webpackChunkName: 'course-edit' */'@/views/course/edit'),
        props: true
      },
      // 课程内容组件
      {
        path: '/course/:courseId/section',
        name: 'course-section',
        component: () => import(/* webpackChunkName: 'course-section' */'@/views/course/section'),
        props: true
      },
      // 上传视频组件
      {
        path: '/course/:courseId/video',
        name: 'course-video',
        component: () => import(/* webpackChunkName: 'course-video' */'@/views/course/video'),
        props: true
      }
    ]
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
// router 的导航守卫功能，页面校验访问权限
router.beforeEach((to, from, next) => {
  console.log(to)
  // 验证 to 路由是否需要进行身份验证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 验证 Vuex 的 store 中的登录用于信息是否存储
    if (!store.state.user) {
    // 未登录,跳转到登录页
      return next({
        name: 'login',
        // query 查询字符串参数，值就是 ？后面的信息，使用它最后会被拼接为： 名=值&名=值的形式
        query: {
          // 将本次路由的 fullPath 传递给 login 页面
          redirect: to.fullPath // redirect 重定向
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
