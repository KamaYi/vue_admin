import {
    LOGIN_STATUS,
    TOKEN,
    SHOW_STATUS
} from './mutation-types.js'
// import localForage from 'localforage'


export default {
    [LOGIN_STATUS](state, data) {
        state.isLogin = data;
        localStorage.setItem('isLogin', data);
    },
    [TOKEN](state, data) {
        state.token = data;
        localStorage.setItem('token', data);
    },
    [SHOW_STATUS](state) {
        state.isShow = !state.isShow;
    }
}