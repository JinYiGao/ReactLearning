/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 22:16:22
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-07 22:41:39
 */
import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

import App from './App'

// 新版本官方建议挂载根节点
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// 旧版本挂载根节点
// ReactDOM.render(<App />, document.getElementById('root'));