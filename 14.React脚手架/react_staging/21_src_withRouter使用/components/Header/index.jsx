/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-11 22:19:55
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 14:24:49
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  render() {
      console.log(this);
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        </div>
    )
  }

  back = ()=>{
      this.props.history.goBack();
  }

  forward = ()=>{
      this.props.history.goForward();
  }
}

export default withRouter(Header)
