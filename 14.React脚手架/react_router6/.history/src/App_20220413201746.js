/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:05:38
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:17:06
 */
import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={this.add}>点我+1</button>
    </div>
  )
}
