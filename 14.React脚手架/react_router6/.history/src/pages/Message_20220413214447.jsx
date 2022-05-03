/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:44:47
 */
import React, { useState } from 'react'

export default function Message() {
  
  const [message] = useState([
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
