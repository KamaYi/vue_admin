import Vue from 'vue'
import ElementUI from 'element-ui';
import router from './router/router'
import store from './store/'
import axios from './config/axios';
import echarts from 'echarts'
import VueLazyload from 'vue-lazyload'
import './assets/iconfont/iconfont'

import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/scss/index.scss';

import localForage from 'localforage'
import 'hover.css'
import animate from 'animate.css'

// import FastClick from 'fastclick'
// import BaiduMap from 'vue-baidu-map'
// import 'lib-flexible/flexible'

// Vue.use(BaiduMap, {
//     // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//     ak: 'KLfWVVCL4kpPUC7fKbovwcoVUTQGgftE'
// })

// if ('addEventListener' in document) {
//     console.log('listem')
//     document.addEventListener('DOMContentLoaded', function() {
//         console.log('vim this file')
//         FastClick.attach(document.body);
//     }, false);
// }

Vue.config.productionTip = false; //设置为 false 以阻止 vue 在启动时生成生产提示
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$localForage = localForage;

// var users = [{ id: 1, fullName: 'Matt' }, { id: 2, fullName: 'Bob' }];
// this.$localForage.setItem('users', users);
// this.$localForage.getItem('users').then(function(data){
//     console.log(data);
// })

Vue.config.devtools = false; //vue 调试工具

Vue.use(VueLazyload, { //图片懒加载应用
    preLoad: 1.3,
    error: require('./assets/images/loading.svg'), //在assets中需要用require进行图片的获取，static下可以用./static进行获取
    loading: require('./assets/images/loading.svg'),
    attempt: 1
})
Vue.use(ElementUI, {
    size: 'small'
});

/**
 *在进行H5拖拽的时候防止火狐等浏览器重新打开页面
 *
 * @param {*} event
 */
document.body.ondrop = function(event) {
    event.preventDefault();
    event.stopPropagation();
}

new Vue({
    router,
    store,
}).$mount('#app');