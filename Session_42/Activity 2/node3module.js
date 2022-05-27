class employee{
    constructor(ename,age,gender)
    {
        this.ename = ename;
        this.age = age;
        this.gender = gender;
    }
    print()
    {
        console.log(`Name:${this.ename},Age:${this.age},Gender:${this.gender}`)
    }
}
module.exports = employee;