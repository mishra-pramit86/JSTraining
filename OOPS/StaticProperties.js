// Simple example of static method
class Person
{
    static greet()
    {
        console.log("Hello")
    }
}
Person.greet(); // method greet is called using a class instead of an object

// Static method cannot access instance properties or methods
/*
class personOne
{
    constructor(name)
    {
        this.name = name;
    }
    static.showName()
    {
        console.log(this.name);
    }
}
personOne.showName(); // Error because static method cannot access instance property 'name'
*/
// Instance method can access instance properties

class TestEngineer {

    static company = "Mindfire Solutions";

    static showCompany() {
        console.log(this.company);
    }
}

TestEngineer.showCompany();

// Another example 

class TestEngineer2 {

    static company = "Mindfire Solutions";

    // Instance property
    constructor(name, experience) {
        this.name = name;
        this.experience = experience;
    }

    // Instance method
    showDetails() {
        console.log(this.name);
        console.log(this.experience);
    }

    // Static method
    static showCompany() {
        console.log(this.company);
    }
}
const tester = new TestEngineer2("John", 15);
tester.showDetails();
TestEngineer2.showCompany();

