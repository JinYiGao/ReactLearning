/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 21:50:27
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 21:50:28
 */
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count: 0};
  render() {
    return (
      <div>
          <h1>当前求和为: {this.state.count}</h1>
      </div>
    )
  }
}
