//The flow of try catch

console.log('Start');
try
{
    console.log('Inside Try');
    console.log(x);
    console.log('After error')
}
catch(error)
{
    console.log('Inside catch');
}
console.log('End');

// try catch for error description

try
{
    console.log(z);
}
catch(error)
{
    console.log(error.name);
    console.log(error.message);
}

//Demonstrating error.stack

try
{
    console.log(a);
}
catch(error)
{
    console.log(error.stack);
}

// Handling different errors

try
{
    let result = y + 10
}
catch(error)
{
    if(error instanceof ReferenceError)
    {
        console.log('Reference error occured');
    }
    else if(error instanceof TypeError)
    {
        console.log('Type error occured');
    }
    else
    {
        console.log('Some other error has occured');
    }
}

// Basic example of try catch finally

try
{
    console.log("This is the try  block");
}
catch(error)
{
    console.log('Error found !');
}
finally
{
    console.log('Finally block')
}

// try catch Only Works for Synchronous Code Directly Inside try

try
{
    setTimeout(() => {
        throw new Error('Error');
    }, 1000);
}
catch(error)
{
    console.log('Caught'); // Error will be described as catch block is unable to catch it 
}

// Example of finally with return 

function myTest()
{
    try
    {
        return 'Try';
    }
    finally
    {
        console.log('Finally')
    }
}
console.log(myTest());