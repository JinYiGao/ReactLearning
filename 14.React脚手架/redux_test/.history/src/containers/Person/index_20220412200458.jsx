/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:02:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:04:05
 */
import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
          <input type="text" placeholder='输入名字'></input>
          <input type="text" placeholder='输入年龄'></input>
          <button>添加</button>
      </div>
    )
  }
}
