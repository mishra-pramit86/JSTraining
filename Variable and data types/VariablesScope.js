let age = 30;
age = 31;
console.log(age);

//const birthYear = 198
//console.log(typeof birthYear);
//birthYear = 1998                // TypeError: Assignment to constant variable

let required = true;
console.log(!required) // will print false

let a = 5;
console.log(5);

let b = 226.5;
console.log(typeof(b));

var c = "Pramit Mishra";
console.log(c);

var c = a + b;
console.log(c); // The variable cannot be redeclared using let but can be redeclared using var

// Demonstrate Global scope 

let name = "Pramit";

function greet() {
    console.log(name);
}

console.log(name);


// let and const are block scoped and var is function scoped

function test()

{
    if(true)
    {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log(x); // 10 as var is funtion scoped 
    console.log(y); //error as let is block scoped
    console.log(z); //error as const is block scoped

}

test();