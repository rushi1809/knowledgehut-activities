let retAll = require('./web-app2module').retAll;
let retById = require('./web-app2module').retById;
let delById = require('./web-app2module').delById;
let Store = require('./web-app2module').Store;
let http = require("http");
let link = require('url');
const port = 8181;

let server = http.createServer((req,res)=>{
    let url = req.url;
    let linkObject = link.parse(url,true);
    console.log(linkObject);
    let par = linkObject.query;
    if(linkObject.pathname=='/fetch')
    {
        let Arr = retById(par.id);
        if(Arr.flag==1)
        {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(` \n <h3> The details of  Employee of id ${par.id}: </h3>\n`);
            res.write(`<h5>ID : ${Arr.eid}, Name : ${Arr.ename}, Salary: ${Arr.esalary}</h5>`);
        }
        else
        {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(`\n <h3> No data found </h3> \n`);
        }
        res.end();
    }
    if (linkObject.pathname=='/fetchAll')
    {
        let Arr =retAll();     
        res.writeHead(200,{'content-type':'text/html'});
        res.write(` \n <h3> The details of all the Employees are as below </h3>\n`);
        res.write(`<table border="1"><thead><tr><th>ID</th><th>Name</th><th>Salary</th></tr></thead>`);
        Arr.forEach(Value => {res.write(`<tbody><tr><td>${Value.id}</td><td>${Value.name}</td><td>${Value.salary}</td></tr></tbody>`);});
        res.write(`</table>`);
        res.end();
    }
    if(linkObject.pathname=='/delete')
    {
        let flag = delById(par.id);
        if(flag==0)
        {  
            res.writeHead(200,{'content-type':'text/html'});
            res.write(`\n <h3> ID not Found </h3>\n`);
        }
        else
        {
            res.writeHead(200,{'content-type':'text/html'});
            res.write(`\n <h3> Data deleted </h3>\n`);
        }
        res.end();
    }
    if(linkObject.pathname=='/store')
    {
        let emp = {id: par.id, name: par.name, salary: par.salary}
        Store(emp);
        res.writeHead(200,{'content-type':'text/html'});
        res.write(`\n <h3> Data Written </h3>\n`);
        res.end();
    }
}).listen(port,()=>{console.log("Server started at port"+port)});