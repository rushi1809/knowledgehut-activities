let read = require('readline-sync');
const { retAll, retById, delById } = require('./node7module');
let Store = require('./node7module').Store;
let choice = 0;
do {  
    choice =  read.questionInt("\n Select the operation you want to perform \n 1.Store\n 2. RetriveAll \n 3. RetriveByID\n 4. DeleteById\n 5. Quit \n"); 
    switch (choice) {
     case 1: 
              let empId = read.questionInt("Enter id: ");
              let empName = read.question("Enter name: ");
              let empSalary = read.questionFloat("Enter salary: ");
              let emp = {id: empId, name: empName, salary: empSalary}
              Store(emp); 
            break;
     case 2:
            retAll();         
            break;
     case 3:    
            let retId = read.questionInt("\n Enter the ID\n");
            retById(retId);
            break;
     case 4:
            let delId = read.questionInt("\n Enter the ID\n");
            delById(delId);
            break;  
     case 5:
            console.log("You Quited")
            break;
     default:
            console.log("\n wrong choice entered \n");
            break;
       }
}while(choice!=5)
