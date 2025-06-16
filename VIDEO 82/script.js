// Function to sum any number of arguments
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0); // Sum all arguments
}

// Async function that resolves after 1 second with value 45
async function sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45) // Resolve promise with 45 after 1 second
        },1000)
    })
}

(async function main(){
    let a = await sleep() // Wait for sleep to resolve
    console.log(a) // Log the resolved value

    let b = await sleep() // Wait for sleep again
    console.log(b) // Log the resolved value

    let [x, y, ...rest] = [1,5,7,8,5,6,9] // Destructure array
    console.log(x, y, rest); // Log x, y, and the rest of the array

    let obj = {
        p: 1,
        q: 2,
        r: 3
    }
    let {p, q} = obj // Destructure object properties
    console.log(p, q); // Log p and q

    let arr = [1, 4, 6]
    console.log(arr[0] + arr[1] + arr[2]); // Sum array elements manually
    console.log(sum(arr[0], arr[1], arr[2])); // Use sum function with individual elements
    console.log(sum(...arr)); // Use sum function with spread operator
})()