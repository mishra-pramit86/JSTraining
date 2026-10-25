let numbers = [10, 25, 5, 40, 30];
highestNum = numbers[0];
secondHighestNum = numbers[1];

for(let i = 0; i <numbers.length; i++)
{
    if(numbers[i] > highestNum)
    {
        secondHighestNum = highestNum;
        highestNum = numbers[i];
    
    }
    else if(numbers[i] > secondHighestNum || numbers[i] != highestNum)
    {
        secondHighestNum = numbers[i]
    }
    
}
console.log("Highest number:", highestNum);
console.log("Second highest number:", secondHighestNum);