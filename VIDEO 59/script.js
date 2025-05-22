/* EXERCISE - 9

Create a faulty Calculator using JavaScipt

This faulty calculator does the following:
1. It takes two number as input from the user.
2. It performs wrong operation as follows:

    + ---> - 
    * ---> +
    - ---> /
    / ---> **  

3. It performs wrong operation 10% of the time.

*/


let random = Math.random() // Generate a random number between 0 and 1
console.log(random)

let a = prompt("Enter first number  : ") // Get first number from user
let b = prompt("Enter operation     : ") // Get operation from user (+, -, *, /)
let c = prompt("Enter second number : ") // Get second number from user

// Mapping of correct operations to faulty operations
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    // 90% of the time, perform the correct operation
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    // 10% of the time, perform the faulty operation
    b = obj[b] // Replace operation with faulty one
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}

