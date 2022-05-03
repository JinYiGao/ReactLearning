/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:53:13
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:50:15
 */
import React, { Component } from 'react'
import Count from './components/Count'
import CountContainer from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        <CountContainer></CountContainer>
      </div>
    )
  }
}
