/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * videoBaseUrl:视频所在域名地址
 */

let baseUrl = '';
let routerMode = 'hash'; //'history'
let imgBaseUrl = '';
let videoBaseUrl = '';


if (process.env.NODE_ENV == 'development') { //开发环境
    baseUrl = 'http://10.0.0.31:8088';
    imgBaseUrl = '/api/upLoadImg';
    videoBaseUrl = '/api/upLoadVideo';

} else if (process.env.NODE_ENV == 'production') { //线上环境
    baseUrl = 'http://10.0.0.31:8088';
    imgBaseUrl = '/api/upLoadImg';
    videoBaseUrl = '/api/upLoadVideo';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
    videoBaseUrl
}