const employee = require('./node3module');
let read = require('readline-sync');
let ename = read.question("enter your name");
let age = read.questionInt("enter your age");
let gender = read.question("Enter a gender");
let e1 = new employee(ename,age,gender);
e1.print();