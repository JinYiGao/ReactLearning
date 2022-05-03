/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:49:29
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:58:22
 */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams();
  
  return (
    <div>
        <ul>
            <li>{params.id}</li>
            <li>{params.title}</li>
            <li>{params.content}</li>
        </ul>
    </div>
  )
}
