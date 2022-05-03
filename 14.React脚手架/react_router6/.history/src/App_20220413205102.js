/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:51:01
 */
import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  const [count, setCount] = React.useState(1);

  function add(){
    setCount(count + 1);
  }

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

            <NavLink className="list-group-item active" to="/home">Home</NavLink>
            <NavLink className="list-group-item active" to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
