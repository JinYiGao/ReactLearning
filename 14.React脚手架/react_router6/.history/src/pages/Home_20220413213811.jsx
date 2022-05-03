/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:47:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:37:51
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>我是Home组件</h2>
        <ul className="nav nav-tabs">
            <li>
            <NavLink className="list-group-item" to="/home/news">News</NavLink>
            </li>
            <li>
            <NavLink className="list-group-item active" to="/home/message">Message</NavLink>
            </li>
        </ul>
    </div>
  )
}
