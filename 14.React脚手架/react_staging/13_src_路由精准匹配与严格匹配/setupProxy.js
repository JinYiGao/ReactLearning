/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 17:18:42
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 17:43:41
 */

// CommonJS语法
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1', {        // 遇见前缀为 /api1 的请求, 就会触发该代理配置
            target: 'http://localhost:5000',    // 请求转发给谁
            changeOrigin: true,                 // 控制服务器接受到的请求头中Host字段的值
            pathRewrite: {'^/api1':''}          // 重写请求路径
        })
    ),
    app.use(
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2':''}
        })
    )
}