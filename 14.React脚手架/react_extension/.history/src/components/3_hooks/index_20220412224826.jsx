/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 22:38:05
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 22:48:24
 */
import React from 'react'

export default function Hooks() {
  const [count, setCount] = React.useState(0);

  function add(){
      setCount(count + 1);
  }

  return (
    <div>
        <h2>当前求和为: {count}</h2>
        <button onClick={add}>点我+1</button>
    </div>
  )
}
