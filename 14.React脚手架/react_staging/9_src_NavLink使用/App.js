/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 22:31:51
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 编写路由链接 */}
              <NavLink activeClassName='active' className='list-group-item' to="/about">About</NavLink>
              <NavLink activeClassName='active' className='list-group-item' to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
