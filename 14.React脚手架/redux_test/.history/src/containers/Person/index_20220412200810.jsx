/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:02:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:08:06
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Person extends Component {
  render() {
    return (
      <div>
          <input ref={(c)=>{this.nameNode = c}} type="text" placeholder='输入名字'></input>
          <input ref={(c)=>{this.ageNode = c}} type="text" placeholder='输入年龄'></input>
          <button onClick={this.addPerson}>添加</button>
          <ul>
              <li>名字1 -- 年龄1</li>
              <li>名字1 -- 年龄1</li>
          </ul>
      </div>
    )
  }

  addPerson = ()=>{
      const name = this.nameNode.value;
      const age = this.ageNode.value;
      console.log(name, age);
  }
}

export default connect()(Person);