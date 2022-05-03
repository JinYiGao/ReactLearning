/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 20:06:22
 */
import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div>
         <div className="container">
            <Search></Search>
            <List></List>
          </div>
      </div>
    )
  }

}
