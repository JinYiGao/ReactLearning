/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 22:04:34
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 22:09:01
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'

export default class LazyLoad extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 编写路由链接 */}
              <NavLink className='list-group-item' to="/about">About</NavLink>
              <NavLink className='list-group-item' to="/home">Home</NavLink>
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