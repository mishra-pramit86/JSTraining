// Example 1 
const whereAmI = async function(country) {
    const res = await fetch(`https://restcountries.eu/rest/v3.1/name/${country}`);
    console.log(res);

}
whereAmI("portugal");
console.log("FIRST");

//Example 2

const testAPI = async function() {
    const res2 = await fetch("https://jsonplaceholder.typicode.com/users/1")
    console.log(res2);
}
testAPI();
console.log("SECOND");

// Example 3- async with promise

function getData() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve("Data received");
        }, 4000);

    });
}
async function test() {

    console.log("Step 1");
    const result = await getData();
    console.log(result);
    console.log("Step 2");
}
 test();

// An async function returns a promise

async function test() {
    return "Hello";
} 
console.log(test());

// Another example of async/await

let anotherPromise = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve("API response received");

    }, 3000);
});

async function anotherTest() {
    console.log("A");

    await anotherPromise;
    console.log("B");
}
console.log("C");
anotherTest();
console.log("D"); // Output: C A D B

// Example 2

async function weatherInfo(){
let delhiWeather = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("30 deg")

    }, 1000)
})

let bangloreWeather = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("23 deg")

    }, 6000)
})

console.log("Fetching Delhi weather...")
let delhiW = await delhiWeather
console.log("Delhi weather:" + delhiW);
console.log("Fetching Banglore weather...")
let bangloreW = await bangloreWeather
console.log("Banglore weather: " + bangloreW)
return[delhiW, bangloreW]
}

console.log("Welcome to weather control room");
let a = weatherInfo();
console.log(a);