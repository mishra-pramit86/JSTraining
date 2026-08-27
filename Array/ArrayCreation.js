//Creating an array

const friends = ["Alice", "Bob", "Charlie"];
console.log(friends); 
const year1 = new Array(1990, 1984, 2008, 2020);

console.log(friends[0]);    //Alice
console.log(friends[2]);    //Charlie
console.log(friends.length); // Gives the number of items present in an array
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

friends[2] = "Apurv"; // Only primitive values cannot be changed and array is not a primitive value
console.log(friends);

console.log("-------------------------------------------------");

const firstName = "Pramit";
const pm = new Array(firstName, "Mishra", 2026-1986, friends); // [ 'Pramit', 'Mishra', 40, [ 'Alice', 'Bob', 'Apurv' ] ]
console.log(pm);

// Function and Arrays 

const calcAge = function (birthYear)
{
    return 2026 -birthYear;
}
const years = [1987, 1984, 2008, 2020, 2024]
const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);



