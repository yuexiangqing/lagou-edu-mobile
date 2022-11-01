import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // count: 0
    // 用于登录成功后，保存用户信息(初始值尝试读取本地存储)
    user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  getters: {
  },
  mutations: {
    // jia (state, payload) {
    //   state.count += payload
    // }
    // 只写同步代码
    // jia (state, payload) {
    //   // setTimeout(() => {
    //   state.count = payload
    //   // }, payload.delay)
    // }

    // 存储用户数据
    setUser (state, payload) {
      // 将 payload 转换为对象后再进行存储
      state.user = JSON.parse(payload)
      // 将 payload 数据添加到本地存储中
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
    // 写异步代码
    // jiaHandle (context, payload) {
    //   setTimeout(() => {
    //     // context 与 store 功能完全相同
    //     context.commit('jia', payload.count)
    //   }, payload.delay)
    // }
  },
  modules: {
  }
})
