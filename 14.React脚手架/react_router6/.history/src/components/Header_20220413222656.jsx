/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 22:23:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:26:16
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  
  function back(){

  }
  function forward(){

  }

  return (
    <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2>
        </div>
        <button onClick={back}>后退</button>
        <button onClick={forward}>前进</button>
    </div>
  )
}
