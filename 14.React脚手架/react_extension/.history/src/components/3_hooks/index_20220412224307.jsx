/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 22:38:05
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 22:42:13
 */
import React from 'react'

export default function Hooks() {
  const [a, b] = React.useState(0);
  console.log(a, b);
  function add(){
      console.log('add');
  }

  return (
    <div>
        <h2>当前求和为: </h2>
        <button onClick={this.add}>点我+1</button>
    </div>
  )
}
