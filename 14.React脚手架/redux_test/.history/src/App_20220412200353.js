/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:53:13
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:03:53
 */
import React, { Component } from 'react'
import CountContainer from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
          <CountContainer></CountContainer>
          <hr></hr>
          <Person></Person>
      </div>
    )
  }
}
