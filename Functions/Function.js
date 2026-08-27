// Calculating the age to demonstrate function decleration

function calcAge1(birthYear)
{
    return 2026 - birthYear
}
const age1 = calcAge1(2024);
console.log(age1);

//Function expression

const calcAge2 = function (birthYear)
{
    return 2026 - birthYear
}
const age2 = calcAge2(2023);
console.log(age1, age2);

//Arrow functions

const calcAge3 = birthYear => 2026 - birthYear

console.log(calcAge3(1998));

// Check a number is even or odd

function evenOdd(number)
{
    if(number % 2 == 0)
    {
        return "The number is even"
    }
    else
    {
        return "The number is odd"
    }
}
console.log(evenOdd(26));
