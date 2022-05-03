/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:09:31
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:55:11
 */

import { ADD_PERSON } from "../constant";

const initState = [];
export default function personReducer(preState=initState, action){
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}