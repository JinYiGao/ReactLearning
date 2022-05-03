/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 18:15:50
 */
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createIncrementAction } from "../../redux/count_action";

// a函数的返回值作为状态props传递给CountUI组件
function a(state){
    return {count: state};
}

function b(dispatch){
    return {increment: (data)=>{
        console.log(1);
        dispatch(createIncrementAction(data));
    }}
}

const CountContainer = connect(a, b)(CountUI);

export default CountContainer;