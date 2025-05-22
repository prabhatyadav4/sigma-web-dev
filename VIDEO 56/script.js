console.log("This is video 56 of SIGMA Web Development Course.") // log course info

let age = 17; // user age
let grace = 2; // grace years

console.log(age + grace) // addition
console.log(age - grace) // subtraction
console.log(age * grace) // multiplication
console.log(age ** grace) // exponentiation
console.log(age / grace) // division
console.log(age % grace) // modulus

if((age+grace)>18){ // check if eligible to drive
    console.log("You can drive");
}
else if((age+grace) == 18){ // check if just eligible
    console.log("Start learnig learning driving")
}
else { // not eligible
    console.log("You cannot drive");
}

a = 6; // first number
b = 8; // second number

let c = a>b ? (a-b) : (b-a); // ternary for absolute difference
/* 
Translates to:
if(a>b){
    let c = (a-b);
}
else{
let c = (b-a)
}
*/
