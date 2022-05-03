/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 20:20:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 20:23:20
 */
import React, { Component } from 'react'

export default class Person extends Component {
  state = {
      persons: [
          {name: 'Yang', age: 10},
          {name: 'Han', age: 20}
    ]
  }

  render() {
    const {persons} = this.state;
    return (
      <div>
          {
              persons.map((person,index)=>{
                  return <h2 key={index}>名字: {person.name}, 年龄: {person.age}</h2>
              })
          }
      </div>
    )
  }
}
