const flag = true;

if(!flag)
{
    console.log("Condition satisfied");
}
else
{
    console.log("Condition NOT satisfied");
    console.log(flag);
}

console.log("---------------------------------------------------------")


let day = 'sunday';

if (day == 'monday')
{
    console.log("Plan course structure");
    console.log("Go to javascript meeting");
}
else if(day == 'tuesday')
{
    console.log('Prepare theory');
}
else if(day == 'wednesday' || day == 'thursday')
{
    console.log('Practise javascript code');
}
else if(day == 'friday')
{
    console.log("Prepare for a short getaway");
}
else if(day == 'saturday' || day == 'sunday')
{
    console.log("Enjoy the weekend !");
}

console.log("-------------------------------------------------------------")

//Find the largest among the 3 numbers

let a = 25;
let b = 39;
let c = 45;

if(a > b && a > c)
{
    console.log("a is the greatest number");
}
else if(b > a && b > c)
{
    console.log("b is the greatest number");
}
else if(c > b && c > a)
{
    console.log("c is the greatest number");
}
else
{
    console.log("some of the numbers are equal")
}

console.log("----------------------------------------------------");

// Find the second largest number

let secondLargest;

if(a > b && a > c)
{
    if(b > c)
    {
        secondLargest = b;
    }
    else
    {
        secondLargest = c;
    }
}
else if(b > a && b > c)
{
    if(a > c)
    {
        secondLargest = a;
    }
    else
    {
        secondLargest = c;
    }
}
else if(c > a && c > b)
{
    if(a > b)
    {
        secondLargest = a;

    }
    else
    {
        secondLargest = b;
    }
}
console.log("The second largest number is:" + secondLargest);

console.log("---------------------------------------------");

let year = 2026

if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0))
{
    console.log("This is a leap year");
}
else
{
    console.log("This is not a leap year")
}




