/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:20:22
 */
import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
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
            <NavLink className={(isActive)=>{ return isActive.isActive ? 'list-group-item active' : 'list-group-item' }} to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/" element={<Navigate to="/about"></Navigate>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
