/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:17:43
 */
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  
  const [messages] = useState([
        {id: '001', title: '消息1', content: '111'},
        {id: '002', title: '消息2', content: '222'},
        {id: '003', title: '消息3', content: '333'},
        {id: '004', title: '消息4', content: '444'},
  ])

  const navigate = useNavigate();
  function showData(){

  }

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
                                    {/* search */}
                                    {/* <Link to={`detail?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link> */}
                                    {/* state */}
                                    <Link to='detail' state={{id: message.id, title: message.title, content: message.content}}>{message.title}</Link>
                                    <button onClick={showData}>展示详情</button>
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
