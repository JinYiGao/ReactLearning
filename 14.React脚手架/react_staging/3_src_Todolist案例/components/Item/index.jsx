/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 23:17:44
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 16:31:42
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }

  render() {
    const todo = this.props.todo;
    return (
      <li style={{backgroundColor: this.state.mouse ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
            <input type="checkbox" checked={todo.done} onChange={this.changeDone(todo.id)}/>
            <span>{todo.name}</span>
        </label>
        <button className="btn btn-danger" style={{display: this.state.mouse ? "block" : "none"}} onClick={()=>{this.handleClick(todo.id)}}>删除</button>
      </li>
    )
  }

  handleMouse = (flag)=>{
    return () =>{
      this.setState({mouse: !this.state.mouse});
    }
  }

  handleClick = (id)=>{
    this.props.deleteTodo(id);
  }

  changeDone = (id)=>{
    return ()=>{
      this.props.changeTodo(id, !this.props.todo.done);
    }
  }
}
