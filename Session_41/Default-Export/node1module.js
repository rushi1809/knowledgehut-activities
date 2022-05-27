class employee{
    constructor(ename,age,salary)
    {
        this.ename = ename;
        this.age = age;
        this.salary = salary;
    }
    print()
    {
        console.log(`Name:${this.ename},Age:${this.age},Salary:${this.salary}`)
    }
}
module.exports = employee;