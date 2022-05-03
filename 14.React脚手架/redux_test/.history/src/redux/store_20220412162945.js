/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:09:48
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:29:45
 */

// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore } from "redux"
// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

const store = createStore(countReducer);
console.log(store);

// 暴露一个全局唯一store对象
export default store