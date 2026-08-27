//Program to find the duplicate number in an array using only for loop

let numbers = [21, 32, 30, 45, 50, 60, 99, 45 ];

for(let i = 0; i < 8; i++)
{
    for(let j = i+1; j < 8; j++)
    {
        if(numbers[i] === numbers[j])
        {
            console.log("The duplicates are", numbers[i]);
            break;
        }
    }
}

// Program to find the largest number in an array using for loop

let numberArray = [21, 32, 30, 45, 50, 60, 99, 45 ];

let largestNum = numberArray[0];

for(let i = 0; i < numberArray.length; i++ )
{
    if(numberArray[i] > largestNum)
    {
        largestNum = numberArray[i]
    }
}
console.log("The largest number is" + largestNum);

// Program to find the second highest number

let largest = numberArray[0];
let secondLargest = numberArray[0];

for(let i = 0; i < numberArray.length; i++)
{
    if(numberArray[i] > largest)
    {
        secondLargest = largest;
        largest = numberArray[i];
    }
    else if(numberArray[i] > secondLargest && numberArray[i] != largest )
    {
        secondLargest = numberArray[i];
    }
}
console.log("2nd highest number is", secondLargest );

