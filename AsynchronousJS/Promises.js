//Simple example of promise

let promise1 = new Promise(function(resolve, reject){
    let success = false;
    if(success){
        resolve("Operation successfull")
    }
    else{
        reject("Operation failed")
    }

});
console.log(promise1);


// Another example of promise

let promise = new Promise(function(resolve, reject){
    console.log("This is a promise")
    resolve(56)

})

console.log('Hello ONE');
setTimeout(function(){
    console.log('Hello TWO in 2 secs');
}, 2000)

console.log('Hello THREE');
console.log(promise);

//Promise with .then() 

let promise2 = new Promise(function(resolve, reject){
    resolve("API call successfull");
});
promise2.then(function(response){
    console.log(response);
}
)

//Promise with catch and finally

let promise3 = new Promise(function(resolve, reject){
    reject("Test FAILED")
});

promise3.then(function(result){
            console.log(result);
            console.log("Then block executed")

        })
        .catch(function(error){
            console.log(error)
            console.log("catch block executed" )

        })

        .finally(function(){
            console.log("Test execution finished");

        });

        
//Promise with setTimeout

let apiRequest = new Promise(function(resolve, reject) {

    console.log("Sending API request...");

    setTimeout(function() {

        resolve("API response received");

    }, 3000);

});

apiRequest.then(function(response) {

    console.log(response);

});        
console.log("printing");

//promise .all() and .race()
// Example of Promise.all()

const p1 = Promise.resolve("User API passed");
const p2 = Promise.reject("User API failed");
const p3 = Promise.resolve("Order API passed");

Promise.all([p1, p2, p3])
.then(function(response){
    console.log(response);  //[ 'User API passed', 'User 2 API passed', 'Order API passed' ]

})
.catch(function(error){
    console.log(error);
});

// Example of .race()

const a1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise 1 completed");
    }, 3000);
});

const a2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Promise 2 completed");
    }, 1000);
});

Promise.race([a1, a2])
.then(function(response){
    console.log(response);
})