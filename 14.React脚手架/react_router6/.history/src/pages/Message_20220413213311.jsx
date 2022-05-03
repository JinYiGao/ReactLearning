/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:32:32
 */
import React from 'react'

export default function Message() {
  return (
    <div>
        <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <a class="list-group-item" href="./home-news.html">News</a>
                  </li>
                  <li>
                    <a class="list-group-item active" href="./home-message.html">Message</a>
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
  )
}
