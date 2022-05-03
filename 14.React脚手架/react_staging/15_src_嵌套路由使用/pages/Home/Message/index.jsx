/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 23:46:37
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 00:36:40
 */
import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/message1">message001</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message2">message002</a>&nbsp;&nbsp;
          </li>
          <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
          </li>
        </ul>
      </div>
    )
  }
}
