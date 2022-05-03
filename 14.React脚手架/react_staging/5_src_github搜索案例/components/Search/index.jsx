/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 17:57:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 19:49:47
 */
import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  render() {
    return (
      <div>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索Github用户</h3>
            <div>
            <input ref={(c)=>{this.keyWordElement = c}} type="text" placeholder="输入用户名搜索"/>&nbsp;<button onClick={this.search}>搜索</button>
            </div>
        </section>
      </div>
    )
  }

  search = ()=>{
      const keyWord = this.keyWordElement.value;
      console.log(keyWord);
      this.props.updateAppState({isFirst: false});
      this.props.updateAppState({isLoading: true});
      axios.get(`https://api.github.com/search/users?q=${keyWord}`).then((res)=>{
          console.log(res.data);
          this.props.updateAppState({isLoading: false});
          this.props.updateAppState({users:res.data.items});
      }, (error)=>{
          this.props.updateAppState({isLoading: false});
          this.props.updateAppState({err:error.message});
      })
  }
}
