// Example of map function
const newFilterEvenScores = [12, 14, 16]
let mappedArray = newFilterEvenScores.map(sc => sc * 3)
console.log(mappedArray); //[ 36, 42, 48 ]

//Map function with strings

const myFriends = ['John', 'Pramit', 'Mayank']
const capitalNames = myFriends.map(function(myFriends) {
    return myFriends.toUpperCase()
})
console.log(capitalNames);

// Reduce function: To print the sum of the above array
let total = mappedArray.reduce((sum, eachItem) => sum + eachItem, 0)
console.log(total);

//Filter method
const scores = [12, 13, 14, 16]
const newEvenScores = scores.filter(num => num % 2 == 0)
console.log(newEvenScores); // [ 12, 14, 16 ]