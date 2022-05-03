/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:57:40
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 15:58:47
 */
import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div>
          <h1>当前求和为: 0</h1>
          <select ref={(c)=>{this.selectNode = c}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>

      </div>
    )
  }
}
