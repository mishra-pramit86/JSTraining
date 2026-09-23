const num = new Set([10, 20, 30, 20, 10]);
console.log(num); // Output: Set(3) { 10, 20, 30}

// Adding values to a set
const names1 = new Set();
names1.add("John");
names1.add("Peter");
names1.add("Mayank");
names1.add("Pramit");
console.log(names1); // Set(3) { 'John', 'Peter', 'Mayank', 'Pramit' }

// Checking weather the set contains a value
console.log(names1.has("Mayank")); //true

//Finding the size of the set
console.log(names1.size); //3

//Removing a value from the set
names1.delete("Peter");
console.log(names1); //Set(3) { 'John', 'Mayank', 'Pramit' }

//Looping in a set
for (const item of names1) {
    console.log(item);
}

console.log("--------------------------------------------------------------------------------");
//Creating a map
const myUser = new Map();
myUser.set("name", "Pramit")
myUser.set("Age", "39");
myUser.set("Role", "QA")
console.log(myUser); //Map(3) { 'name' => 'Pramit', 'Age' => '39', 'Role' => 'QA' }

//Updating the value in Map
console.log(myUser.get('39')); //Undefined
console.log(myUser.get("Age")); //39

//Getting the size of the map
console.log(myUser.size); //3

//Checking weather the key exists
console.log(myUser.has("39")) //false
console.log(myUser.has("Age")); //true

//Looping in a map
for (const [key, value] of myUser) {
    console.log(key, value);
}

// Difference between Object and Map
