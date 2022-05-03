/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 19:44:13
 */
import React, { Component } from 'react'

import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  
  updateAppState = (obj)=>{
    this.setState(obj);
  }

  render() {
    return (
      <div>
         <div className="container">
            <Search updateAppState={this.updateAppState}></Search>
            <List {...this.state}></List>
          </div>
      </div>
    )
  }

}
