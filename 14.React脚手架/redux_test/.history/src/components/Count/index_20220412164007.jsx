/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:57:40
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:39:52
 */
import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  state = {count: 0}

  componentDidMount(){
      // 订阅一个函数 只要redux里任何一个状态发生改变,都会调用回调
      store.subscribe(()=>{
        this.forceUpdate();
      })
  }

  render() {
    return (
      <div>
          <h1>当前求和为: {store.getState()}</h1>
          <select ref={(c)=>{this.selectNode = c}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.decrementIfOdd}>当前求和为奇数再加</button>&nbsp;
          <button onClick={this.decrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }

  increment =()=>{
      const value = this.selectNode.value;
      store.dispatch({type: 'increment', data: value * 1})
  }

  decrement = ()=>{
      const value = this.selectNode.value;
      store.dispatch({type: 'decrement', data: value * 1})
  }

  decrementIfOdd = ()=>{
    const value = this.selectNode.value;
    if(store.getState() % 2 !== 0){
        store.dispatch({type: 'increment', data: value * 1})
    }
  }

  decrementAsync = ()=>{
    const value = this.selectNode.value;
    setTimeout(() => {
        store.dispatch({type: 'increment', data: value * 1})
    }, 200);
  }
}
