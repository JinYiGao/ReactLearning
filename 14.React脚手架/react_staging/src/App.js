/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 14:47:11
 */
import React, { Component } from 'react'
import { Button } from 'antd'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <button>点我</button>&nbsp;
        <Button type="primary">按钮1</Button>
        <Button type="link">按钮2</Button>
      </div>
    )
  }
}

