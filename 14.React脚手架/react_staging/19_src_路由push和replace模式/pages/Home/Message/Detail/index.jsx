/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 11:19:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 11:58:52
 */
import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const {id, title} = this.props.location.state || {};
    return (
      <div>
          <ul>
              <li>{id}</li>
              <li>{title}</li>
              <li>Message</li>
          </ul>
      </div>
    )
  }
}
