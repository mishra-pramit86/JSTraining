// Slice method
let day = 'Tuesday ';
console.log(day.length); // 8
console.log(day.slice(0, 4)); //Tues
console.log(day[1]);

// Split method and trim method

let splitDay = day.split('s');
console.log(splitDay);  //[ 'Tue', 'day ' ]
console.log(splitDay[1].length); //length of 'day ': 4
console.log(splitDay[1].trim().length); //length of 'day': 3

// parseint method

let date = '23';
let nextDate = '27';
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);
console.log(diff.toString()); // converting integer to string 

// indexOf and lastIndexOf methods

let newQuote = day + "is Funday";
console.log(newQuote);              //Tuesday is Funday
let val1 = newQuote.indexOf('day', 5);
console.log(val1);  //14
let val2 = newQuote.lastIndexOf('day') //14
console.log(val2);
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')

//Program to find out how many times 'day' occurs in the string

let count = 0;
let val = newQuote.indexOf("day")
while(val !== -1)
{
    count++
    val = newQuote.indexOf("day", val + 1);
}
console.log(count);

console.log("--------------------------------------------------------------------");

const airLines = "TAP Air Portugal";
const plane = "A320";

console.log(airLines.indexOf('r'));
console.log(airLines.lastIndexOf('r'));

//Coverting to lower case and upper case
console.log(airLines.toLowerCase());
console.log(airLines.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase(); //jonas
console.log(passengerLower);
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); //Jonas
console.log(passengerCorrect);

// Substring method 
 let sampleWord = 'JavaScript'
 console.log(sampleWord.substring(0,4));

// Difference between substring and slice method 

console.log(sampleWord.slice(-6)); // Script
console.log(sampleWord.substring(-6)); //JavaScript as negative value is considered 0

// CharAt and charCodeAt method

console.log(sampleWord.charAt(4));     //S
console.log(sampleWord.charCodeAt(4)); //83

// trimStart and trimEnd method 

let myName = "  Pramit  ";
console.log(myName.trimEnd());     
console.log(myName.trimStart());

// creating string using new String method

let name = new String("Pramit")
console.log(name);                 //[String: 'Pramit']
console.log(name.toString());      // Pram









