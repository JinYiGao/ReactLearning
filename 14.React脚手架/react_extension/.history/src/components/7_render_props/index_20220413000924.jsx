/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:37:34
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 00:09:19
 */
import React, { Component } from 'react'

export default class Parent extends Component {
  state = {carName: '奔驰'}
  render() {
    return (
      <div>
          <h3>我是Parent组件</h3>
          <A><B/></A>
      </div>
    )
  }

  changeCar = ()=>{
      this.setState({carName: this.state.carName + '1'});
  }
}

class A extends Component {
  state = {name: "Tom"}
  render() {
    console.log(this);
    return (
      <div>
          <h3>我是A组件</h3>
          {this.props.children}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div>
          <h3>我是B组件</h3>
      </div>
    )
  }
}
  