/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 17:57:47
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 20:50:44
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './index.css'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
    // 挂载后初始化
    componentDidMount(){
        this.token = PubSub.subscribe('updateState', (msg, obj)=>{
            this.setState(obj);
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token); // 取消订阅
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state;
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
