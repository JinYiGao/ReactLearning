/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 17:57:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-11 20:54:07
 */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
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
        PubSub.publish('updateState', {isFirst: false});
        PubSub.publish('updateState', {isLoading: true});
        //#region axios发送网络请求
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then((res)=>{
        //     console.log(res.data);
        //     PubSub.publish('updateState', {isLoading: false});
        //     PubSub.publish('updateState', {users:res.data.items});
        // }, (error)=>{
        //     PubSub.publish('updateState', {isLoading: false});
        //     PubSub.publish('updateState', {err:error.message});
        // })
        //#endregion

        // fetch发送网络请求
        fetch(`https://api.github.com/search/users?q=${keyWord}`).then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            PubSub.publish('updateState', {isLoading: false});
            PubSub.publish('updateState', {users: data.items});
        }).catch((error)=>{
            console.log(error.message);
            PubSub.publish('updateState', {isLoading: false});
            PubSub.publish('updateState', {err: error.message});
        })
    }
}
