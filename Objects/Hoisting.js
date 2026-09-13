// Hoisting with var

console.log(a); // undefined
var a = 10;     
console.log(a); //10

console.log('-----------------------------------------------------------------------------------')

console.log(x); // undefined
var x = 100;
console.log(x); // 100
x = 200;
console.log(x); //200

// Hoisting with let (Temporal Dead Zone)

console.log(age);  // TDZ
let age = 30;      // Initialization
console.log(age);  // 30

// Hoisting with const (let and const act in the same way)

console.log(country);
const country = "India";

// Function Hoisting 

greet();
function greet()
{
    console.log("Hello Pramit");
}

// Hoisting with function expression does not work

greet();

var greet = function()
{
    console.log("Hello"); // TypeError: greet is not a function
}