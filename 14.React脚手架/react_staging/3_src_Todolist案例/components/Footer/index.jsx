/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 23:17:33
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 16:44:18
 */
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    const totalTodos = this.props.todos.length;
    const doneTodos = this.props.todos.reduce((pre, todo)=>{
      return pre + (todo.done ? 1 : 0);
    }, 0)
    return (
      <div className="todo-footer">
          <label>
          <input type="checkbox" checked={doneTodos === totalTodos && doneTodos !== 0} onChange={this.handleCheckAll}/>
          </label>
          <span>
          <span>已完成{doneTodos}</span> / 全部{totalTodos}
          </span>
          <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
      </div>
    )
  }
  
  handleCheckAll = (e)=>{
    this.props.checkAllTodos(e.target.checked);
  }

  handleClear = ()=>{
    this.props.clearAllDone();
  }
}
