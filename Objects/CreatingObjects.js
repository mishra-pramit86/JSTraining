const jonasArray = ['Jonas', 'Cook', 1986 - 2026, 'Tester', ['Peter', 'Steve', 'Mayank']]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Cook',
    age: 1986 - 2026,
    job: 'Tester',
    friends: ['Peter', 'Steve', 'Mayank']
};

console.log(jonas.firstName);
console.log(jonas['lastName']); 

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//"Jonas has 3 friends, and his best friend is called Peter"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
jonas.gender = 'male';  // Create new object property
console.log(jonas);
delete jonas.gender;    // Delete object property
console.log(jonas);
console.log('gender' in jonas); // Check if a property exists in object

//Print all the values of the javascript object

for (let key in jonas)
{
    console.log(jonas[key]);
}

