const isPassed = (status) => status === "Passed"

const countDigits = (cardNumber) => {
    let count = 0;
    for(let i = 0; i < cardNumber.length; i++) {
        if(cardNumber[i] >= '0' && cardNumber[i] <= '9') {
            count++
        }
    }
    return count;
}
console.log(countDigits("4532 1234 5678 9012"))

const testCases = [
    { name: "Login", status: "Pass", executionTime: 10 },
    { name: "Checkout", status: "Fail", executionTime: 20 },
    { name: "Search", status: "Pass", executionTime: 15 },
    { name: "Payment", status: "Fail", executionTime: 30 }
];

totalTime = 0;

for(let i = 0; i < testCases.length; i++)
{
    if(testCases[i].status === "Fail")
    {
        totalTime = totalTime + testCases[i].executionTime;
    }
}

console.log(totalTime);

