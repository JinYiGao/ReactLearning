/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 16:09:43
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 16:18:50
 */

// 创建一个用于为Count组件服务的reducer, reducer本质是一个函数
function countReducer(preState, action){
    const {type, data} = action;
    switch (type) {
        case 'increment':
            return data + 1;
            break;
    
        default:
            break;
    }
}