module.exports.emp = class employee {
    constructor(ename,age,salary)
    {
        this.ename = ename;
        this.age = age;
        this.salary = salary;
    }
    print()
    {
        console.log(`Name:${this.ename},Age:${this.age},Salary:${this.salary}`);
    }
}

module.exports.cal = class calculator{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    add()
    {
        let c = this.a+this.b;
        console.log(`Result is :${c}`);
    }
}