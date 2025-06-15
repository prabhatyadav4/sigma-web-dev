let a = 6 // Number to calculate factorial for

// Function to calculate factorial using reduce
function factorial(number){
    // Create an array [0, 1, 2, ..., number]
    let arr = Array.from(Array(number+1).keys())
    // Remove 0 and multiply all elements together
    let c = arr.slice(1).reduce((a, b) => a * b, 1)
    return c
}

console.log(factorial(a)) // Output factorial using reduce

// Function to calculate factorial using a for loop
function facFor(number){
    let fac = 1
    // Multiply fac by each number from 1 to number
    for(let index = 1; index <= number; index++){
        fac = fac * index
    }
    return fac
}
console.log(facFor(a)) // Output factorial using for loop
