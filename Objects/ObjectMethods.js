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

    getSummary: function()
    {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
    }
};
console.log(jonas.calcAge());
console.log(jonas.getSummary());