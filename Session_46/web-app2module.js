let fs = require('fs');
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
    return Arr; 
}
function retById (retId){
    let data = fs.readFileSync("test.json").toString();
    let Arr = JSON.parse(data);
    let remp={eid:0,ename:"",esalary:0,flag:0}
    Arr.forEach(Value=>{
        if(Value.id==retId)
        {
            remp={eid:Value.id,ename:Value.name,esalary:Value.salary,flag:1};             
        } 
    })
    return remp;
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
            let jString = JSON.stringify(Arr);
            fs.writeFileSync("test.json",jString);
            flag=1;
        }
    })
    return flag;
}

module.exports = {Store,Read,retAll,retById,delById};                                