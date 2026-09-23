// Basic Arrow function
const calcAge3 = birthYear => 2026 - birthYear
const age3 = calcAge3(1998);
console.log(age3);

//Another example with curly braces

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2026 - birthYear;
    const retirementAge = 60 - age;
    return `${firstName} retires in ${retirementAge} years`;
}
console.log(yearsUntilRetirement(1998, 'Jonas'));
console.log(yearsUntilRetirement(1986, 'Bob'));

//Arrow function with noparameter

const test = () => {
    console.log("Testing started");
}
test();

// Difference between arrow function and normal function
// Use Async/Await in arrow functions (with and without parameters)

const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("API response received");
    }, 3000);
});

const anotherTest = async () => {
    console.log("A");
    await anotherPromise;
    console.log("B");
};

console.log("C");
anotherTest();
console.log("D");

//Nornal function 

function logArgs1() {
  console.log(arguments[0], arguments[1]);
}
logArgs1("apple", "orange"); //"apple", "orange"

const logArgs2 = (...args) => {
  console.log(args[0], args[1]);
};
logArgs2("apple", "orange"); // "apple", "orange"