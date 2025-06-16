console.log('This is promises'); // Log initial message

// Create first promise
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generate random number
    if(a < 0.5){
        reject("No random number is supporting") // Reject if less than 0.5
    }
    else{
        setTimeout(() => {
            console.log('Yes, I am done'); // Log after timeout
            resolve("Prabhat") // Resolve with value
        }, 3000); // 3 seconds delay
    }
})

// Create second promise
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generate random number
    if(a < 0.5){
        reject("No random number is supporting 2") // Reject if less than 0.5
    }
    else{
        setTimeout(() => {
            console.log('Yes, I am done 2'); // Log after timeout
            resolve("Prabhat 2") // Resolve with value
        }, 2000); // 2 seconds delay
    }
})

// Example of handling a single promise (commented out)
// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })

// Promise.all waits for all promises to resolve, or rejects if any fail
let p3 = Promise.all([prom1, prom2])

p3.then((a) => {
    console.log(a); // Log resolved values if all succeed
}).catch(err => {
    console.log(err); // Log error if any promise fails
})

// Promise.allSettled waits for all promises to settle (resolve or reject)
let p4 = Promise.allSettled([prom1, prom2])

p4.then((a) => {
    console.log(a); // Log results of all promises
}).catch(err => {
    console.log(err); // Log error (rare for allSettled)
})