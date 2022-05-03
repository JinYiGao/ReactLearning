/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 15:57:40
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:03:22
 */
import React, { Component } from 'react'

export default class Count extends Component {
  state = {count: 0}

  render() {
    return (
      <div>
          <h1>当前求和为: 0</h1>
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
      const count = this.state.count + 1;
      this.setState({count})
  }

  decrement = ()=>{

  }

  decrementIfOdd = ()=>{

  }

  decrementAsync = ()=>{

  }
}
