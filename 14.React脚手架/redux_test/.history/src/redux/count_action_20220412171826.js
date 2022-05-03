/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:46:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:18:26
 */
import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"

// 该文件专门为Count组件生成action对象
export const createIncrementAction = (data)=>{
    return {type: INCREMENT, data: data}
}

export const createDecrementAction = (data)=>{
    return {type: DECREMENT, data: data}
}

// 异步Action ———— 就是指Action的值为函数
export const createIncrementAsyncAction = (data, time)=>{
    return ()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data));
        }, time);
    }
}