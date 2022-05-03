/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 22:36:39
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 22:48:04
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
        <NavLink activeClassName='active' className='list-group-item' {...this.props}></NavLink>
    )
  }
}
