/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:52:26
 */
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  
  const [messages] = useState([
        {id: '001', title: '消息1', content: '111'},
        {id: '002', title: '消息2', content: '222'},
        {id: '003', title: '消息3', content: '333'},
        {id: '004', title: '消息4', content: '444'},
    ])
  return (
    <div>
        <h2>Home组件内容</h2>
        <div>
            <div>
                <ul>
                    {
                        messages.map((message)=>{
                            return (
                                <li key={message.id}>
                                    {/* <Link to="detail">{message.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
