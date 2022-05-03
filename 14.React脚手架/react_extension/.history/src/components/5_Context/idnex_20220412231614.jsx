/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:14:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:15:34
 */
import React, { Component } from 'react'

export default class A extends Component {
    state = {username: 'Tom'}
  render() {
    return (
      <div>
          <h3>我是A组件</h3>
          <h4>我的用户名是: {this.state.username}</h4>
      </div>
    )
  }
}


class B extends Component {
    render() {
        return (
        <div>
            <h3>我是A组件</h3>
            <h4>我从A组件收到的用户名是: {this.state.username}</h4>
        </div>
        )
    }
}

  
class C extends Component {
    render() {
        return (
            <div>
            <h3>我是A组件</h3>
            <h4>我从A组件收到的用户名是: {this.state.username}</h4>
        </div>
        )
    }
}
  