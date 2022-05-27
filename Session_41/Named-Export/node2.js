const employee = require('./node2module').emp;
const calculator = require('./node2module').cal;
let e1 = new employee("avinash",21,"70k");
let c1 = new calculator(5,6);
e1.print();
c1.add();
