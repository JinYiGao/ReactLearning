/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 16:50:41
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 17:39:24
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <div>
          <button onClick={this.getStudentData}>点我获取学生数据</button>
          <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    )
  }

  getStudentData = ()=>{
      axios.get('http://localhost:3000/api1/students').then((data)=>{
          console.log(data.data);
      })
  }

  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then((data)=>{
          console.log(data.data);
      })
  }
}
