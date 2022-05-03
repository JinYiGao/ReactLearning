/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-03 16:23:20
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-03 16:35:17
 */

var r = [255.0, 0,0, 0,0];
var g = [0.0, 255.0, 0.0];
var b = [0.0, 0.0, 255.0];

var result = [];
for(var i = 0; i < 25; i++){
    result.push(r[0], r[1], r[2]);
    r[1] += 10;
}

for(var i = 0; i < 25; i++){
    r[0] -= 10;
    r[2] += 10;
    result.push(r[0], r[1], r[2]);
}

for(var i = 0; i < 25; i++){
    r[1] -= 10;
    r[0] += 10;
    result.push(r[0], r[1], r[2]);
}

var result2 = []
for(var i = 0; i < result.length; i = i + 3){
    result2 .push(result[i], result[i + 1], result[i + 2]);
}

console.log(result2);