/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 22:38:05
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:07:32
 */
import React from 'react'
import ReactDOM from 'react-dom';

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

  const myRef = React.useRef();

  function add(){
      setCount(count => count + 1);
  }

  function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  function showData(){
    console.log(myRef.current.value);
  }

  return (
    <div>
        <input type="text" ref={myRef}/>
        <h2>当前求和为: {count}</h2>
        <button onClick={add}>点我+1</button>
        <button onClick={unmount}>点我卸载组件</button>
        <button onClick={showData}>点我提示数据</button>
    </div>
  )
}
