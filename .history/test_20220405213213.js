/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-05 21:30:15
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-05 21:32:13
 */
class Person{
    constructor(age, name){
        this.age = age;
        this.name = name;
    }

    speak(){
        console.log(this.age);
        console.log(this.name);
    }
}

class Student{
    constructor(nj){
        this.nj = nj;
    }
}

Student st1 = new Student(11);