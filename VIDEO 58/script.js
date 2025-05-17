// Function to print compliments for a given name
function nice(name){
    console.log("Hey " + name + ", you are good.")
    console.log("Hey " + name + ", you are better.")
    console.log("Hey " + name + ", you are best.")
    console.log("Hey " + name + ", you are nice.")
}
nice("Prabhat") // Call the function with "Prabhat"

// Function to sum three numbers, with default value for c
function sum(a, b, c = 8){
    // console.log(a+b)
    return a+b+c
}
result1 = sum(3) // Only one argument, b is undefined, c is 8
result2 = sum(3,4,) // Two arguments, c is 8
result3 = sum(3,4,4) // All three arguments provided
console.log("The sum of these numbers are: ", result1)
console.log("The sum of these numbers are: ", result2)
console.log("The sum of these numbers are: ", result3)

// Arrow function example
const func1 = (x) => {
    console.log("I am an arrow function", x)
}
func1(54); // Call with 54
func1(64); // Call with 64
func1(74); // Call with 74