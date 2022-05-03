/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 21:50:27
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 21:57:06
 */
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count: 0};
  render() {
    return (
      <div>
          <h1>当前求和为: {this.state.count}</h1>
          <button onClick={this.add}>点我+1</button>
      </div>
    )
  }

  add = ()=>{
      const {count} = this.state;
      this.setState({count: count + 1}, ()=>{
          console.log(count);
      });
  }
}
