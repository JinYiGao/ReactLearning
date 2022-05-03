/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:53:13
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 19:36:38
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
// import Count from './components/Count'
import CountContainer from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <CountContainer></CountContainer>
        </Provider>
      </div>
    )
  }
}
