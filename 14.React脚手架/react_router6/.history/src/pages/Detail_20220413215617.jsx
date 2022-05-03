/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 21:49:29
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 21:56:08
 */
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams();
  console.log(params);
  
  return (
    <div>Detail</div>
  )
}
