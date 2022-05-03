/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-13 22:55:08
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-13 22:59:21
 */

var a = [1, 2,3,4,5];
try{
    a.forEach((e)=>{
        console.log(e);
        if(e == 3){
            throw Error();
        }
    })
}
catch(e){}


for(var i = 0; i < a.length; i++){
    console.log(a[i]);
    break;
}