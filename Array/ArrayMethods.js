// Demonstrating push function

const friends = ["Jai", "Veeru", "Basanti"];
const newLength = friends.push("Gabbar");
console.log(friends);    // [ 'Jai', 'Veeru', 'Basanti', 'Gabbar' ]
console.log(newLength); // The push function also returns the length of the new array

// Add element to the starting of an array

friends.unshift("Thakur");
console.log(friends);     // [ 'Thakur', 'Jai', 'Veeru', 'Basanti', 'Gabbar' ]

// Remove elements from the end of the array

const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove element from the starting of the array
friends.shift();
console.log(friends);

// Get the index of an element in an array
console.log(friends.indexOf('Jai'));
console.log(friends.indexOf('Pramit')); // Returns -1 for the element that is not there in the array

// Demonstrate the function of includes

console.log(friends.includes('Veeru'));
friends.push(20);
console.log(friends);
console.log(friends.includes('20')); // False: As includes uses strict equality 
friends.push(25,30);
console.log(friends); // [ 'Jai', 'Veeru', 'Basanti', 20, 25, 30 ]

//Demonstrate slice function
let subList = friends.slice(3,6); // [ 20, 25, 30 ]
console.log(subList);

//Filter method

var scores = [12, 13, 14, 16]
/*
var evenScores = [];
for(i = 0; i < scores.length; i++)
{
    if(scores[i] % 2 == 0)
    {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);
*/
let newFilterEvenScores = scores.filter(num => num % 2 == 0)
console.log(newFilterEvenScores); // [ 12, 14, 16 ]

// Map function: Multiply all the items in newFilterEvenScores by 3 

let mappedArray = newFilterEvenScores.map(sc => sc * 3)
console.log(mappedArray); //[ 36, 42, 48 ]

// Reduce function: To print the sum of the above array

let total = mappedArray.reduce((sum, eachItem) => sum + eachItem, 0)
console.log(total);

//Demonstrate the sort function

let fruits = ["banana", "mango", "papaya", "apple"];
console.log(fruits.sort());

var scores2 = [12, 0o3, 19, 16, 14];
//console.log(scores2.sort());     // [ 12, 14, 16, 19, 3 ]

console.log(scores2.sort((a, b) => a -b)); //[ 3, 12, 14, 16, 19 ]