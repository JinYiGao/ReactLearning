/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:09:43
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:00:40
 */
import { INCREMENT, DECREMENT } from "./constant"

const initState = 0;
// 创建一个用于为Count组件服务的reducer, reducer本质是一个函数
export default function countReducer(preState=initState, action){
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}