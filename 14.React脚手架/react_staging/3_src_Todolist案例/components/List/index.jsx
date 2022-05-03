/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-07 23:17:44
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 15:07:06
 */
import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} todo={todo} changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo}></Item>
          })
        }
      </ul>
    )
  }
}
