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

let random = Math.random() // random number 0-1
console.log(random)

let a = prompt("Enter first number  : ") // input 1st number
let b = prompt("Enter operation     : ") // input operation
let c = prompt("Enter second number : ") // input 2nd number

// correct to faulty operation map
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if(random > 0.1){
    // 90%: correct operation
    console.log(`The result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    // 10%: faulty operation
    b = obj[b] // swap operator
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
