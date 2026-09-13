const jonas = {
    firstName: 'Jonas',
    lastName: 'Cook',
    birthYear: 1986,
    job: 'Tester',
    friends: ['Peter', 'Steve', 'Mayank'],
    hasDriversLicense: true,

    //calcAge: function(birthYear)
    //{
    //    return 2026 - birthYear;
    //}

    calcAge: function()
    {
        console.log(this);
        this.age = 2026 - this.birthYear;
        return this.age;
    },

    fullName: function()
    {
        return this.firstName + this.lastName
    },

    getSummary: function()
    {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
    }
};
console.log(jonas.calcAge());
console.log(jonas.getSummary());
console.log(jonas.fullName());

// In  / off in object loops
// Inbuilt methods

// Object.keys and Object.values and Object.entries methods

const employee = {
    employeeName: 'Pramit',
    employeeAge: 35,
    department: 'QA'
};
console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

console.log('---------------------------------------------------------------------------------')

// Object.hasOwn() - Checks whether an object contains that property

const employeeDetail = {
    name: "Pramit",
    age: 35
};

console.log(Object.hasOwn(employeeDetail, "name"));
console.log(Object.hasOwn(employeeDetail, "salary"));
console.log('age' in employeeDetail);


