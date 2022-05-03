/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 21:43:05
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 11:54:12
 */
import React, { Component } from 'react'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
import { Route } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/message" component={Message}></Route>
      </div>
    )
  }
}
