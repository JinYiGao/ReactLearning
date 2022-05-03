/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:20:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:21:23
 */
import React, { Component } from 'react'

export default class Person extends Component {
  state = {
      persons: [
          {name: 'Yang', age: 10},
          {name: 'Han', age: 20}
    ]
  }

  render() {
    return (
      <div>index</div>
    )
  }
}
