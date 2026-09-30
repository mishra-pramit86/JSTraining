// Example of a simple class program
/*
class Person
{
    age = 38
    //location = 'Canada'
    get location() //When we put get before method name then that is treated as a property
    {
        return 'Canada'
    }


}
let person = new Person()
console.log(person.age);
*/

// Example with constructor

class Person
{
    age = 38
    //location = 'Canada'
    get location() //When we put get before method name then that is treated as a property
    {
        return 'Canada'
    }
 // Constructor is a method which executes by default when you carete an object of a class
    constructor(firstName, lastName) //here firstName lastName are instance variables
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName()
    {
        console.log(this.firstName + this.lastName);
    }

}
let person = new Person("Tim", "Robbins")
console.log(person.age);
console.log(person.location);
console.log(person.fullName());
