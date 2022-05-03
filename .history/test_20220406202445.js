/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-05 21:30:15
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-06 20:24:33
 */



var a = [1,2,3,4,5];
var b = [6, 7,8];
console.log(...a,...b);

let sum = (...a)=>{
    a.reduce((old,cur)=>{
        return old + cur;
    })
}

console.log(a);