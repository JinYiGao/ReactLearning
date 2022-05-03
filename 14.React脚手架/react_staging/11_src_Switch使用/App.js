/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 22:55:56
 */
import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Route path="/home" component={Test}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
