/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-05 21:30:15
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-06 20:33:25
 */



var a = [1,2,3,4,5];
var b = [6, 7,8];
var obj = {age: 100, sex:1000};
var obj2 = {...obj};
obj.age = 12;
console.log(obj);
console.log(obj2);

console.log(...a,...b);

let sum = (...a)=>{
    return a.reduce((old,cur)=>{
        return old + cur;
    })
}

console.log(sum(...a));