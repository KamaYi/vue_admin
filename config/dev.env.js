'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')



module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    autoOpenBrowser: false,
    disableHostCheck: true,
    host: 'localhost', //入口地址
    port: '8080',
    nodeSereverAddress: 'http://localhost:8088' //访问后台接口地址以及端口号
});