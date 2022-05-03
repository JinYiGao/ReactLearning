/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 23:46:37
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 14:16:49
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
      messageArr: [
          {id: '001', title: '消息1'},
          {id: '002', title: '消息2'},
          {id: '003', title: '消息3'},
      ]
  }
  render() {
    return (
      <div>
        <ul>
          {
              this.state.messageArr.map((message)=>{
                  return (
                    <li key={message.id}>
                        {/* 向路由组件传递params参数 */}
                        <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                        <button onClick={()=>{this.pushShow(message.id, message.title)}}>push查看</button>
                        <button onClick={()=>{this.replaceShow(message.id, message.title)}}>replace查看</button>
                        
                        {/* 向路由组件传递search参数 */}
                        {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}

                        {/* 向路由组件传递state参数 */}
                        {/* <Link to={{pathname: '/home/message/detail', state:{id:message.id, title:message.title}}}>{message.title}</Link> */}
                    </li>
                  )
              })
          }
        </ul>
        <hr></hr>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        
        {/* search参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
      </div>
    )
  }

  back = ()=>{
      this.props.history.goBack();
  }

  forward = ()=>{
      this.props.history.goForward();
  }

  pushShow = (id, title)=>{
    //   this.props.history.push(`/home/message/detail/${id}/${title}`);
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);
    this.props.history.push(`/home/message/detail`, {id, title});
  }

  // 实现replace跳转到Detail组件
  replaceShow = (id, title)=>{
    //   this.props.history.replace(`/home/message/detail/${id}/${title}`);
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);
    this.props.history.replace(`/home/message/detail/`, {id, title});
  }
}
