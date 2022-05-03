/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:46:04
 */
import React, { useState } from 'react'

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

                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </div>
    </div>
  )
}
