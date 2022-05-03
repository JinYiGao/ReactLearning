/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:37:34
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 00:01:50
 */
import React, { Component } from 'react'

export default class Parent extends Component {
  state = {carName: '奔驰'}
  render() {
    return (
      <div>
          <h3>我是Parent组件</h3>
      </div>
    )
  }

  changeCar = ()=>{
      this.setState({carName: this.state.carName + '1'});
  }
}

class A extends Component {
  render() {
    return (
      <div>
          <h3>我是Child组件</h3>
          <span>我接到的车是:</span>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
          <h3>我是Child组件</h3>
          <span>我接到的车是:</span>
      </div>
    )
  }
}
  