/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:46:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:09:36
 */
import { INCREMENT, DECREMENT } from "./constant"

// 该文件专门为Count组件生成action对象
export const createIncrementAction = (data)=>{
    return {type: INCREMENT, data: data}
}

export const createDecrementAction = (data)=>{
    return {type: DECREMENT, data: data}
}

export const createIncrementAsyncAction = (data, time)=>{
    
}