//Program to find consecutive occuring letters in a sentence

let sentence = "The crazzy for jumps over the running kitten";
for (let i = 0; i < sentence.length - 1; i++) {
    if (sentence[i].toLowerCase() === sentence[i + 1].toLowerCase()) {
        console.log("The consecutive letter is", sentence[i]);

    }
}

//Program to find the longest word in a sentence 

let theSentence = "This is a javaScript review"
let words = theSentence.split(" ");

let longestWord = "";

for(let i = 0; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
        longestWord = words[i];
    }

}
console.log("Longest word is:", longestWord);

// Reverse a name 

let name = "Pramit";
let reversedName = "";

for(let i = name.length - 1; i >= 0; i--) {
    reversedName = reversedName + name[i]
}
console.log(reversedName)