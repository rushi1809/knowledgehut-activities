const employee = require('./node4module');
let read = require('readline-sync');
let info = [];
let i =0;
let question = "Y";
do{
    let ename = read.question("\n Enter Employee name \n");
    let age = read.questionInt("\n Enter Employee age \n");
    let gender = read.question("\n Enter Employee gender \n");
    let e1 = new employee(ename,age,gender);
    info[i]= e1;
    i++;   
    question = read.question("\n Do u want to cont y/n \n");
}while(question !="n")
console.log("\n The Employee details are as below \n")
info.forEach(value => {
    console.log(`\nname : ${value.ename}\nage:${value.age}\nGender:${value.gender}`);
});