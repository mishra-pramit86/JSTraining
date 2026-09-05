// Replace and replaceAll methods

const announcement = "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); //All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll("door", "gate")); // All passengers come to boarding gate 23. Boarding gate 23!

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

//Split and join methods
console.log("a + very + nice + string".split("+"));
const [firstName , lastName] = "Pramit Mishra".split(" ");
console.log(lastName);

const newName = ["Mr", firstName , lastName.toUpperCase()].join(" ");
console.log(newName); //Mr Pramit MISHRA

console.log("---------------------------------------------------------------------------")

// Function to turn any name intitaial letter to capital letter
const capitalizeName = function(name)
{
    const namesUpper = [];
    const partNames = name.split(" ");

    for(var n of partNames)
    {
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0] , n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
}
capitalizeName("pandit gangadhar mayadhar")

//Sorting an array in ascending order using localeCompare method

let fruits = ["Mango", "Apple", "Banana", "Orange"];
fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits);

//Sorting an array in descending order using localeCompare method

fruits = ["Mango", "Apple", "Banana", "Orange"];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);

// Case Insenstive comparison

let greet1 = "Hello"
let greet2 = "heLLo"

console.log(greet1.toLowerCase() === greet2.toLowerCase());

// Case senstive sorting

let tastyFruits = ["banana", "Apple", "orange", "Mango"];
tastyFruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(tastyFruits);
