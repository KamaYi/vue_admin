import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'
import { routerMode } from '../config/env'
import indexRouter from './modules/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 1000 })

const router = new Router({
    mode: routerMode,
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) { //与keepAlive结合，如果keepAlive的话，保存停留的位置：
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return {
                x: 0,
                y: to.meta.savedPosition || 0
            }
        }
    },
    routes: [
        ...indexRouter,
    ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
    console.log(to.meta)
    NProgress.start();
    /* has token*/
    if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
    } else {
        if (to.meta.requireAuth) { // 判断是否需要登录权限
            if (store.state.isLogin) {
                next()
            } else {
                next({
                    path: '/login'
                })
            }
        } else {
            next()
        }
    }
})

router.afterEach(() => {
    NProgress.done(); //强制结束
})

Vue.use(Router)
export default router;