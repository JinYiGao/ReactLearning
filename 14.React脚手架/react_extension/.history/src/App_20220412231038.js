/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 21:41:28
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:10:38
 */
import React, { Component } from 'react'
import Frag from './components/4_Fragment'
// import Hooks from './components/3_hooks'
// import Demo from './components/1_setState'
// import LazyLoad from './components/2_lazyLoad'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Demo add={100}></Demo> */}
        {/* <LazyLoad></LazyLoad> */}
        {/* <Hooks></Hooks> */}
        <Frag></Frag>
      </div>
    )
  }
}

