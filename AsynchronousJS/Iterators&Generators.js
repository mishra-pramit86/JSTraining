const numbers = [10, 20, 30];
const iterator1 = numbers[Symbol.iterator]();
console.log(iterator1) // Object [Array Iterator] {}
console.log(iterator1.next()); // { value: 10, done: false }
console.log(iterator1.next()); // { value: 20, done: false }
console.log(iterator1.next()); // { value: 30, done: false }
console.log(iterator1.next()); // { value: undefined, done: true }

// Strings are iterable

const myName = 'Pramit';
const iterator2 = myName[Symbol.iterator]();
console.log(iterator2.next()); //{ value: 'P', done: false }
console.log(iterator2.next()); //{ value: 'r', done: false }
console.log(iterator2.next()); //{ value: 'a', done: false }

// Maps are iterable

const myUserMap = new Map();
myUserMap.set("name", "Pramit")
myUserMap.set("Age", "39");
myUserMap.set("Role", "QA")
console.log(myUserMap);
const iterator3 = myUserMap[Symbol.iterator]();
console.log(iterator3.next()); //{ value: [ 'name', 'Pramit' ], done: false }
console.log(iterator3.next());
console.log(iterator3.next());

// Example of generator

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}
const generator1 = numbers();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

// Example 2 of generator

function* testData() {
    yield "Login";
    yield "Create User";
    yield "Update User";
    yield "Delete User";
}
const test = testData();

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());

//Example 3: Having 2 generators and knowing the values for generator

function* numbers2() {

    yield 1;
    yield 2;
    yield 3;
}

const generator2 = numbers2();
const generator3 = numbers2();

console.log(generator2.next().value); // 1
console.log(generator2.next().value); // 2

console.log(generator3.next().value); // 1

// Example 4 of generator

function* loginScenarios() {

    yield {
        username: "validUser",
        password: "validPassword",
        expected: "success"
    };

    yield {
        username: "invalidUser",
        password: "validPassword",
        expected: "failure"
    };

    yield {
        username: "validUser",
        password: "wrongPassword",
        expected: "failure"
    };

    yield {
        username: "",
        password: "",
        expected: "validation error"
    };
}
const generator4 = loginScenarios()

console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());