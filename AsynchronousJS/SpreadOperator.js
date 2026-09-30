const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];
console.log(newArr); // [ 1, 2, 7, 8, 9 ]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9); //1 2 7 8 9

// Adding new item to the array

mainMenu = ['pizza', 'pasta', 'risotto']
const newMenu = [...mainMenu, 'garlic bread'] //[ 'pizza', 'pasta', 'risotto', 'garlic bread' ]
console.log(newMenu);

// Copy of existing arrays
const mainMenuCopy = [...mainMenu];

// Join 2 arrays

const starterMenu = ['chicken tikka', 'paneer tikka', 'Tomato Soup']
const menu = [...starterMenu, ...mainMenu]
console.log(menu);

// Spread operator and string

const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters);

// Object and spread operator

const restaurant = {
    name: 'Amritsari Haveli',
    location: 'D Block, Shyam Nagar, Kanpur',
    categories: ['Italian', 'Mughlai', 'Vegetarian']
}
const newRestaurant = {foundedIn: 2025, ...restaurant}
console.log(newRestaurant);

// Rest in Array Destructuring

const [first, second, ...others] = ['Red', 'Blue', 'Green', 'Yellow'];
console.log(first);  // 'Red'
console.log(others); // ['Green', 'Yellow']

//Rest in Object Destructuring

const settings = { theme: 'dark', font: 'Arial', size: 14 };
const { theme, ...typography } = settings;
console.log(theme);      // 'dark'
console.log(typography); // { font: 'Arial', size: 14 }

