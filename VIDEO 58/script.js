// Print compliments for a name
function nice(name){
    console.log("Hey " + name + ", you are good.")
    console.log("Hey " + name + ", you are better.")
    console.log("Hey " + name + ", you are best.")
    console.log("Hey " + name + ", you are nice.")
}
nice("Prabhat") // Call with "Prabhat"

// Sum three numbers, c defaults to 8
function sum(a, b, c = 8){
    return a+b+c
}
result1 = sum(3) // b is undefined, c is 8
result2 = sum(3,4) // c is 8
result3 = sum(3,4,4) // c is 4
console.log("The sum of these numbers are: ", result1)
console.log("The sum of these numbers are: ", result2)
console.log("The sum of these numbers are: ", result3)

// Arrow function example
const func1 = (x) => {
    console.log("I am an arrow function", x)
}
func1(54) // Call with 54
func1(64) // Call with 64
func1(74) // Call with 74
