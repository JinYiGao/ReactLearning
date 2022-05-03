/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:37:34
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:37:34
 */
import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>Parent</div>
    )
  }
}

class Child extends Component {
    render() {
      return (
        <div>Parent</div>
      )
    }
  }
  