/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 17:57:47
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 19:52:54
 */
import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props;
    return (
      <div>
        <div className="row">
            {
                isFirst ? <h2>欢迎使用,输入关键字,点击搜索!</h2> : 
                isLoading ? <h2>Loading...</h2> :
                err ? <h2>{err}</h2> :
                users.map((user)=>{
                    return (
                        <div key={user.id} className="card">
                            <a rel="noreferrer" href={user.html_url} target="_blank">
                                <img src={user.avatar_url} style={{width: '100px'}} alt='NoPicture'/>
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
