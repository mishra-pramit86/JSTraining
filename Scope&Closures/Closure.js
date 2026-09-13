const secureBooking = function () 
{
    let passengerCount = 0;

    return function ()
    {
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    };
};

const booker = secureBooking();
booker();  // function always has access to the variable environment of execution context in which it was created
booker();
console.dir(booker);

console.log('---------------------------------------------------------------------------------------------------')

// Closure with parameters

function multiplyBy(number)
{
    return function(value)
    {
        return value * number
    };
}
const multiplyBy10 = multiplyBy(10);
console.log(multiplyBy(10)); // Anonymous function
console.log(multiplyBy10(5)); // 50
console.log(multiplyBy10(7)); // 70

// Example with 2 independent counters

function counter()
{
    let count = 0;

    return function()
    {
        count++ ;
        return count;
    };
}
const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

// Closure and Lexical scope 

const name = 'Pramit'
function outer()
{
    const message = 'Hello';
    function inner()
    {
        console.log(message);
        console.log(name);
    }

    inner();
}
outer();

// Another example

const boardPassengers = function (n, wait)
{
    const perGroup = n / 3;

    setTimeout(function ()
    {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);

    
};
boardPassengers(180, 3); // Closure has priority over the scope chain


