import {
    TOKEN,
    LOGIN_STATUS,
    SHOW_STATUS
} from './mutation-types.js'

export default {
    token({
        commit
    }, data) {
        commit(TOKEN, data)
    },
    login({
        commit
    }, data) {
        commit(LOGIN_STATUS, data)
    },
    isShow({
        commit
    }) {
        commit(SHOW_STATUS)
    }
}