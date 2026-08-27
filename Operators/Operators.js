//Arithmetic Operators

const now = 2026;
const ageRavi = now - 1990;
const ageVivek = now -2015;
console.log( ageRavi, ageVivek);

console.log(ageRavi *2, ageVivek / 2, 2**3);

const firstN = "Sachin";
const lastN = "Tendulkar";
console.log(firstN + ' '+ lastN);

let x = 10 + 5; //15
x +=10;         //x = x + 10
x*=4;           // x = x * 4
x++;             //x = x + 1
console.log(x);

//Comparison Operators

console.log(ageRavi > ageVivek);
const isFullAge = ageVivek >= 18;
console.log(isFullAge);
console.log(now - 1990 > now -2015);

console.log("-----------------------------------------------------------")

//Logical operators

let age = 39;
let hasLicense = true;
console.log(age>=18 && hasLicense); // Use of & logical operator

age = 16;
let hasLicense2 = true;
console.log(age >= 18 && hasLicense2);

let day = "Sunday";
if(day === "Saturday" || day === "Sunday") // Use of || logical operator
{
    console.log("This is weekend"); 
}


let isRaining = false;
if(!isRaining)                          // Using the ! operator
{
    console.log("We can go outside");
}


// Demonstrating Short Circuiting 

console.log("Hello" || "World"); 

console.log(false && "Hello");    // False: when using && javaScript stops as soon as it finds a falsy value.
console.log(false || "Hello");    //Hello