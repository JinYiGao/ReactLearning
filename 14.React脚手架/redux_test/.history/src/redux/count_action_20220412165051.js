/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:46:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:50:25
 */

// 该文件专门为Count组件生成action对象
export const createIncrementAction = (data)=>{
    return {type: 'increment', data: data}
}

export const createDecrementAction = (data)=>{
    return {type: 'decrement', data: data}
}


