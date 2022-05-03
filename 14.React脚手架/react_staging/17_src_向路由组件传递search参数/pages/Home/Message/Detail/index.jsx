/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 11:19:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 11:48:36
 */
import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
  render() {
    const {id, title} = qs.parse(this.props.location.search.slice(1));
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
