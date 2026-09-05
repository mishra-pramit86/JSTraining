//parseint and toString methods

let date = '23';
let nextDate = '27';
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
console.log(diff.toString()); // converting integer to string 

//Remove duplicate characters in a string using cocatenation of string 

let originalWord = 'programming';
let newWord = '';

for(let i = 0; i < originalWord.length; i++)
{
    if(!newWord.includes(originalWord[i]))
    {
        newWord = newWord + originalWord[i];
    }
}

console.log("Original :" , originalWord);
console.log("Result: " , newWord);

//Reverse a string 

let original = 'javascript'
let reversed = ''

for (let i = original.length - 1; i >= 0; i--)
{
    reversed = reversed + original[i]
}

console.log("Original :" , original);
console.log("Result: " , reversed);

//Replace every character at even index with *

let originalStr = "JavaScript";
let resultStr = "";

for(let i = 0; i < originalStr.length; i++)
{
    if(i % 2 == 0)
    {
        resultStr = resultStr + "*";
    }
    else
    {
        resultStr = resultStr + originalStr[i];
    }
}
console.log("Original :" , originalStr);
console.log("Result: " , resultStr);

// Converting strings to numbers 

var a = '10';
var b = '20';
console.log(a + b); //1020

// Cocatenation of string and number

var a = '20';
var b = 10;
console.log(a + b); //2010
console.log(a - b); //10
console.log(a * b); //200
console.log(a / b); //2

// Example

let price = '500';
let quantity = '2';

console.log(price + quantity); //string 5002
console.log(price * quantity); // 1000
console.log(Number(price) + Number(quantity)); //502

// Converting string to arrays 

let name1 = "Pramit";

let result1 = name1.split("");

console.log(result1);

