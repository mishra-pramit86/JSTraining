//Global Scope

let name = "Pramit";
function showName() {
    console.log(name);
}

showName(name);
console.log(name);

// Function Scope
function test()
{
    //var message = "Hello";
    let message = 'Hello';
    console.log(message);
} 
//console.log(message); //ReferenceError: message is not defined
test(); // Prints Hello

//IIFE

(function()
{
    console.log("This will never run again");
})();

// More examples of Global and Local Scope 

let company = 'Mindfire';

function employee()
{
    let empName = 'Pramit';

    console.log(company); //Inner scope can access the outer scope
    console.log(empName);
}

//console.log(empName); // empName is not defined 
employee();

// Variable Shadowing 

let myName = 'Global Pramit'

function test()
{
    let myName = 'Local Pramit';

    console.log('This will print the name of Local Pramit')
}

test();
console.log(myName);