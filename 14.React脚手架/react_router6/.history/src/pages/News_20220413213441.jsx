/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:32:36
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:34:41
 */
import React from 'react'

export default function News() {
  return (
    <div>
                      <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <a class="list-group-item active" href="./home-news.html">News</a>
                  </li>
                  <li>
                    <a class="list-group-item " href="./home-message.html">Message</a>
                  </li>
                </ul>
                <ul>
                  <li>news001</li>
                  <li>news002</li>
                  <li>news003</li>
                </ul>
              </div>
    </div>
  )
}
