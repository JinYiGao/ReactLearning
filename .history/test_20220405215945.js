/*
 * @Descripttion: 
 * @version: 
 * @Author: JinYiGao
 * @Date: 2022-04-05 21:30:15
 * @LastEditors: JinYiGao
 * @LastEditTime: 2022-04-05 21:59:45
 */
class Person{
    constructor(age, name){
        this.age = age;
        this.name = name;
        this.obj = {};
    }

    speak(){
        console.log(this.age);
        console.log(this.name);
    }
}

class Student extends Person{
    // constructor(age, name, nj){
    //     super(age, name);
    //     this.nj = nj;
    // }
    // speak(){
    //     console.log(this.nj);
    // }
    age = 22
}

var p1 = new Person(22, "GG");
console.log(p1);
var st1 = new Student(18, "jin", 6);
st1.speak();
console.log(st1);