function greet()
{
    console.log('Hello Pramit');
}
function processUser(callback)
{
    console.log('Processing user......')
    callback();
}
processUser(greet); //Passing a function greet

// Callback with parameters

function processUser(name, callback)
{
    console.log('Processing user:', name);
    callback(name)
}
function greetUser(name)
{
    console.log('Hello', name);
}
processUser('Pramit', greetUser)

// Another very basic example of callback

function add(a, b, cb)
{
    let result = a + b;
    cb(result);
}
add(2, 4, function(val){
    console.log(val);
})

//Example of callback hell

function boilWater(callback) {
    console.log("Water boiled");
    callback();
}

function addTea(callback) {
    console.log("Tea added");
    callback();
}

function addMilk(callback) {
    console.log("Milk added");
    callback();
}

function addSugar(callback) {
    console.log("Sugar added");
    callback();
}
boilWater(function () {

    addTea(function () {

        addMilk(function () {

            addSugar(function () {

                console.log("Tea is ready!");

            });

        });

    });

});

