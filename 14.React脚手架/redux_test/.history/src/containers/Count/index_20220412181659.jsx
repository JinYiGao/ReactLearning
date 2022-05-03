/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 18:16:53
 */
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createIncrementAction } from "../../redux/count_action";

// a函数的返回值作为状态props传递给CountUI组件
function mapStateToProps(state){
    return {count: state};
}

function b(dispatch){
    return {increment: (data)=>{
        dispatch(createIncrementAction(data));
    }}
}

const CountContainer = connect(mapStateToProps, b)(CountUI);

export default CountContainer;