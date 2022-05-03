/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-12 17:38:08
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-12 17:38:08
 */
function a(){
    return 1;
}

function t(){
    return ()=>{
        setTimeout(() => {
            a();
        }, 200);
    }
}

t()()