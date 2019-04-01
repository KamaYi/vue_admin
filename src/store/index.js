import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

// import localForage from 'localforage'


Vue.use(Vuex)

const state = {
    // TODO: 放置初始状态
    isLogin: localStorage.getItem('isLogin') || false,
    token: localStorage.getItem('token') || '',
    isShow: false,
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})