/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 22:38:05
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:03:40
 */
import React from 'react'
import { ReactDOM } from 'react';

export default function Hooks() {
  const [count, setCount] = React.useState(0); // state Hook
  
  React.useEffect(()=>{
      const id = setInterval(() => {
          setCount(count => count + 1)
      }, 1000);
      return ()=>{
          clearInterval(id);
      }
  },[])

  function add(){
      setCount(count => count + 1);
  }

  function unmount(){
    unmountComponentAtNode(document.getElementById('root'));
  }

  return (
    <div>
        <h2>当前求和为: {count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={unmount}>点我卸载组件</button>
    </div>
  )
}
