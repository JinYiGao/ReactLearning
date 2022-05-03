/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:37:34
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:39:15
 */
import React, { Component } from 'react'

export default class Parent extends Component {
  state = {carName: '奔驰'}
  render() {
    return (
      <div>
          <h3>我是Parent组件</h3>
          <span>我的车名字是: </span>
          <button onClick={this.changeCar}></button>
      </div>
    )
  }

  changeCar = ()=>{

  }
}

class Child extends Component {
    render() {
      return (
        <div>Child

        </div>
      )
    }
  }
  