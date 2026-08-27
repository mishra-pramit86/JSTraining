// Find the largest number in an array using the while loop

let numberArray = [100, 32, 30, 45, 50, 60, 99, 45 ];

let largest = numberArray[0];
var i = 0;

while(numberArray[i] !== undefined)
{
    if(numberArray[i] > largest)
    {
        largest = numberArray[i]
    }
    i++
}
console.log("The largest number is", largest);

// Find the duplicate numbers using while loop

let numbers = [21, 45, 30, 45, 50, 60, 99, 30 ];
let p = 0;

while(numbers[p] !== undefined)
{
    let q = p + 1;

    while(numbers[q] !== undefined)
    {
        if(numbers[p] == numbers[q])
        {
            console.log("Duplicate numbers are", numbers[p])
            break;
        }
        q++;
    }
    p++;
}

// Do while loop to print even numbers from 2 to 10

var i = 2;

do
{
    console.log(i);
    i =i + 2;
}
while(i<=10)

// Result in do while when the initial condition is not met

var i = 10;
do
{
    console.log("Byee !");
    i++
}
while(i<5)

// The same program with only while loop

var i = 10;
while(i < 5)
{
    console.log("Byee !");
    i++
}


