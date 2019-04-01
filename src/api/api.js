import axios from 'axios';

let base = ''; //公共  请求模块划分

//请求登录
export const requestLogin = params => { return axios.post(`${base}/api/login`, params).then(res => res.data); };

export const ceshiPut = params => { return axios.put(`${base}/api/putData`, params).then(res => res.data); };

export const ceshiGet = params => { return axios.get(`${base}/api/getData`, { params: params }).then(res => res.data); };

export const ceshiDelete = params => { return axios.delete(`${base}/api/deleteData`, { params: params }); };