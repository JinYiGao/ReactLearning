/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:36:14
 */
// 引入Count的UI组件
// import CountUI from "../../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { Component } from "react";
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/actions/count";


class Count extends Component {
    //   state = {count: 0}
    
      render() {
          console.log(this);
        return (
          <div>
              <h1>当前求和为: {this.props.count}</h1>
              <select ref={(c)=>{this.selectNode = c}}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>&nbsp;
              <button onClick={this.increment}>+</button>&nbsp;
              <button onClick={this.decrement}>-</button>&nbsp;
              <button onClick={this.decrementIfOdd}>当前求和为奇数再加</button>&nbsp;
              <button onClick={this.decrementAsync}>异步加</button>&nbsp;
          </div>
        )
      }
    
      increment =()=>{
          const value = this.selectNode.value;
          this.props.increment(value * 1);
      }
    
      decrement = ()=>{
          const value = this.selectNode.value;
          this.props.decrement(value * 1);
      }
    
      decrementIfOdd = ()=>{
        const value = this.selectNode.value;
        if(this.props.count % 2 !== 0){
            this.props.increment(value * 1);
        }
      }
    
      decrementAsync = ()=>{
        const value = this.selectNode.value;
        this.props.asyncIncrement(value * 1, 500);
      }
}
    

// a函数的返回值作为状态props传递给CountUI组件 state ———— redux保存的状态值
function mapStateToProps(state){
    return {
        count: state.count,
        persons: state.persons
    };
}

function mapDispatchToProps(dispatch){
    return {
        increment: (data)=>{
            dispatch(createIncrementAction(data));
        },
        decrement:(data)=>{
            dispatch(createDecrementAction(data));
        },
        asyncIncrement: (data, time)=>{
            dispatch(createIncrementAsyncAction(data, time));
        }
    }
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);

export default CountContainer;