/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 23:17:44
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 15:00:49
 */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  
  render() {
    return (
      <div className="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认"  onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }

  handleKeyUp = (e)=>{
    if(e.keyCode !== 13) return;
    if(e.target.value.trim() === '') return;
    const value = e.target.value;
    console.log(value);
    this.props.addTodo({id:nanoid(), name: value, done: false});
    e.target.value = "";
  }
}
