/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 22:23:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:31:02
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  
  function back(){
    navigate('/home/message');
  }

  function forward(){
    navigate(1);
  }

  return (
    <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2>
        </div>
        <button onClick={back}>ει</button>
        <button onClick={forward}>εθΏ</button>
    </div>
  )
}
