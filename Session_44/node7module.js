let fs = require('fs');
let read = require('readline-sync');
function Check()
{
    if(!fs.existsSync("test.json"))
    {
        let Arr = [];
        let arrString = JSON.stringify(Arr);
        fs.writeFileSync("test.json",arrString);
    }
    return true;
}               
function Store(emp)
{
     if(Check)
    {
        let Arr = Read();
        Arr.push(emp);
        let jString = JSON.stringify(Arr);
        fs.writeFileSync("test.json",jString);
    }
}                      
function Read()
{
    Check();
    if(Check)
    {
        let data = fs.readFileSync("test.json").toString();
        let arr = JSON.parse(data);
        return arr;
    }
}     
function retAll(){
    let data = fs.readFileSync("test.json").toString();
    let Arr = JSON.parse(data);
    Arr.forEach(Value => {
        console.log(`\n ID : ${Value.id}, Name : ${Value.name}, Salary : ${Value.salary}\n`);
    }); 
}
function retById(retId){
    let data = fs.readFileSync("test.json").toString();
    let Arr = JSON.parse(data);
    let flag = 0;
    Arr.forEach(Value=>{
        if(Value.id==retId)
        {
            console.log(`\nID : ${Value.id}, Name : ${Value.name}, Salary : ${Value.salary}\n`)
            flag=1;
        }
    })
    if(flag==0)
    {
        console.log("\n ID is not Found \n");
    }
}
function delById(delId)
{
    let data = fs.readFileSync("test.json").toString();
    let Arr = JSON.parse(data);
    let flag =0;
    Arr.forEach((Value,Index)=>{
        if(Value.id==delId)
        {
            Arr.splice(Index,1);
            flag=1;
        }
    })
    if(flag==0)
    {
        console.log("\n ID is not Found \n");
    }
    else
    {
        let jString = JSON.stringify(Arr);
        fs.writeFileSync("test.json",jString);
    }
}
module.exports = {Store,Read,retAll,retById,delById};                                