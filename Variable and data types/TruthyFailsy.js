// Example of Falsy as 0 here is falsy

let age = 0;

if (age) 
{
    console.log("Age is available")
}
else
{
    console.log("Age is not available")
}

console.log("---------------------------------------------------------")

let value
if (value)
{
    console.log("The value exists")
}
else
{
    console.log("The value is falsy") // Falsy since value is undefined 
}

console.log("------------------------------------------------------------")

if ([]) 
    {
    console.log("Array is truthy");
    }

if ({}) 
    {
        console.log("Object is truthy");
    }
    
console.log("--------------------------------------------------------------")

console.log(Boolean("Hello"));
console.log(Boolean(100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(Boolean(NaN));