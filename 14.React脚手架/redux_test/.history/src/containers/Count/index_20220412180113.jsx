/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:41:52
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:52:22
 */
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入redux store
// import store from "../../redux/store";
// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";

const CountContainer = connect()(CountUI);

export default CountContainer;