/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:47:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:41:47
 */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>我是Home组件</h2>
        <ul className="nav nav-tabs">
            <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
            </li>
            <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
            </li>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}
