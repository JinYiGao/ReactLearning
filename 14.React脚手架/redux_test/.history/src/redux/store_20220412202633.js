/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:09:48
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:25:40
 */

// 引入createStore,专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux"
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from "./reducers/person";
import thunk from "redux-thunk"


const allReducer = combineReducers(
    {
        countReducer, 
        personReducer
    }
);

const store = createStore(countReducer, applyMiddleware(thunk));

// 暴露一个全局唯一store对象
export default store