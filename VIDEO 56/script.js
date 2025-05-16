console.log("This is video 56 of SIGMA Web Development Course.")

let age = 17;
let grace = 2;
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age / grace)
console.log(age % grace)
if((age+grace)>18){
    console.log("You can drive");
}
else if((age+grace) == 18){
    console.log("Start learnig learning driving")
}
else {
    console.log("You cannot drive");
}

a = 6;
b = 8;

let c = a>b ? (a-b) : (b-a);
/* 
Translates to:
if(a>b){
    let c = (a-b);
}
else{
let c = (b-a)
}
*/
