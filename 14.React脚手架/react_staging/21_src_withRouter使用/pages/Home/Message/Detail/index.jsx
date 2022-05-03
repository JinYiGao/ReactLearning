/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 11:19:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 14:15:15
 */
import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
  render() {
    // 接收state参数
    const {id, title} = this.props.location.state || {};
    // 接收search参数
    // const {id, title} = qs.parse(this.props.location.search.slice(1));
    // 接收params参数
    // const {id, title} = this.props.match.params;
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
