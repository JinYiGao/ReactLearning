/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 20:09:26
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 20:10:58
 */
import { ADD_PERSON } from "../constant";

export const createAddPersonAction = (personObj)=>{
    return {type: ADD_PERSON, data: personObj}
}