import {PI, add, subtract} from "./mathUtils.js";
console.log(PI); // 3.14159
console.log(add(10, 5)); // 15

// Notice there are no curly braces, and we can name it whatever we want
import Person from './mathUtils.js';

const newPerson = new Person("Alice", 28);
console.log(newPerson.getProfile()); // "Alice is 28 years old."