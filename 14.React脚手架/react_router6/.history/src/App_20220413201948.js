/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:19:41
 */
import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(1);

  function add(){
    setCount(count + 1);
  }
  
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={add}>点我+1</button>
    </div>
  )
}
