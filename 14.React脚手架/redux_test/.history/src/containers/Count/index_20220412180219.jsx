/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 18:02:19
 */
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入redux store
// import store from "../../redux/store";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";

// a函数的返回值作为状态传递给CountUI组件
function a(){

}

const CountContainer = connect()(CountUI);

export default CountContainer;