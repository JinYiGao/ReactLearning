/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:46:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:25:17
 */
import { INCREMENT, DECREMENT } from "./constant"

// 该文件专门为Count组件生成action对象
export const createIncrementAction = (data)=>{
    return {type: INCREMENT, data: data}
}

export const createDecrementAction = (data)=>{
    return {type: DECREMENT, data: data}
}

// 异步Action ———— 就是指Action的值为函数
export const createIncrementAsyncAction = (data, time)=>{
    console.log(1)
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    }
}