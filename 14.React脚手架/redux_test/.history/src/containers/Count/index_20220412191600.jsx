/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 19:16:00
 */
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action";

// a函数的返回值作为状态props传递给CountUI组件 state ———— redux保存的状态值
function mapStateToProps(state){
    return {count: state};
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
        dispatch(createIncrementAsyncAction(data));
    }}
}

const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;