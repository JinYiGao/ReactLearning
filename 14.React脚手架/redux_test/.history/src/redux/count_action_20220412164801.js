/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:46:19
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:47:47
 */

// 该文件专门为Count组件生成action对象

function createIncrementAction(data){
    return {type: 'increment', data: data}
}

function createDecrementAction(data){
    return {type: 'decrement', data: data}
}