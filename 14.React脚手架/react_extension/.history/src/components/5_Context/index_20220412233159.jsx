/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 23:14:12
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 23:31:59
 */
import React, { Component } from 'react'

// 创建一个用于保存变量的Context对象
const MyContext = React.createContext();

export default class A extends Component {
    state = {username: 'Tom', age:18}
  render() {
    const {username, age} = this.state;
    return (
      <div>
          <h3>我是A组件</h3>
          <h4>我的用户名是: {this.state.username}</h4>
          <MyContext.Provider value={{username, age}}>
          <B></B>
          </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
    render() {
        return (
            <div>
                <h3>我是子组件</h3>
                <h4>我从A组件收到的用户名是: </h4>
                <C></C>
            </div>
        )
    }
}

class C extends Component {
    // 声明接收context
    static contextType = MyContext;

    render() {
        console.log(this);
        return (
            <div>
                <h3>我是孙组件</h3>
                <h4>我从A组件收到的用户名是: {this.context.username}, 年龄是{this.context.age}</h4>
                <h4>我从A组件收到的用户名是:
                <MyContext.Consumer>
                    {value=>{`${value.username},年龄是${value.age}`}}
                </MyContext.Consumer>
                </h4>
            </div>
        )
    }
}
  