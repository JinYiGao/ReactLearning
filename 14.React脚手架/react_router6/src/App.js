/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:23:19
 */
import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom';
import Header from './components/Header';
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={(isActive)=>{ return isActive.isActive ? 'list-group-item active' : 'list-group-item' }} to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
             {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
