/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:37:00
 */
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Message() {
  return (
    <div>
        <h2>Home组件内容</h2>
        <div>
        <ul className="nav nav-tabs">
            <li>
            <NavLink className="list-group-item" to="/home/news">News</NavLink>
            </li>
            <li>
            <NavLink className="list-group-item active" to="/home/message">Message</NavLink>
            </li>
        </ul>
        <div>
            <ul>
            <li>
                <a href="/message1">message001</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message2">message002</a>&nbsp;&nbsp;
            </li>
            <li>
                <a href="/message/3">message003</a>&nbsp;&nbsp;
            </li>
            </ul>
        </div>
        </div>
    </div>
  )
}
