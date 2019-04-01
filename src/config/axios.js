/*引入Vue框架*/
import Vue from 'vue';
/**
 * http配置
 */
// 引入axios以及element ui中的loading和message组件
import axios from 'axios'

import md5 from 'js-md5'

import sha1 from './sha1'

import Router from 'vue-router'

import store from '../store/'

let router = new Router();

import {
    Loading,
    Message
} from 'element-ui'

let timestamp = md5(new Date().getTime().toString());
let secretkey = md5('3333333');

axios.create({
    baseURL: "", // 因为我本地做了反向代理
    timeout: 5000, // 超时时间
    responseType: "json", //数据格式
    withCredentials: true, // 是否允许带cookie这些
    headers: { //跨域处理
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
});


axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

let jsonSort = (jsonObj => { //JSON参数的升序排列
    let arr = [];
    for (var key in jsonObj) {
        arr.push(key)
    }
    arr.sort();
    let str = '';
    for (var i in arr) {
        str += arr[i] + "=" + jsonObj[arr[i]] + "&"
    }
    return str.substr(0, str.length - 1)
})

// axios.defaults.timeout = 5000
// http请求拦截器
let loadinginstace
axios.interceptors.request.use(config => {
    // element ui Loading方法
    loadinginstace = Loading.service({
        fullscreen: false
    });
    console.log(localStorage.getItem('token'));

    // console.log(config);
    // console.log(jsonSort(config.data))
    // console.log(timestamp)
    // console.log(secretkey)
    // console.log(md5(jsonSort(config.data)) + '.' + secretkey + '.' + timestamp)
    // console.log(sha1(md5(jsonSort(config.data)) + '.' + secretkey + '.' + timestamp));
    // config.data = { //进行参数的签名
    //     signature: sha1(md5(jsonSort(config.data)) + '.' + secretkey + '.' + timestamp)
    // }
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
});
// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
    //拦截用户登录超时执行操作
    console.log(res.data);
    console.log(res.data.data != undefined);

    if (res.data.data) {
        if (res.data.data.code == 300) {
            Message.error({
                message: '登录超时，请重新登录。',
                onClose: function() {
                    store.dispatch('login', false);
                    setTimeout(() => {
                        router.push({ path: 'login' });
                        router.go(0); //强制刷新页面
                        loadinginstace.close();
                    }, 1000);
                }
            })
            return
        }
    }
    loadinginstace.close();
    return res
}, error => {
    console.log(error);
    loadinginstace.close();
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持该请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = "连接到服务器失败"
    }
    Message.error({
        message: error.message
    })
    return Promise.reject(error)
})

/*使用axios插件*/
Vue.prototype.$axios = axios;

export default axios;