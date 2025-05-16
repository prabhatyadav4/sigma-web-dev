console.log("Hey this is video 55 of Sigma Web Development Course")

var a = 5;
var b = 6;
console.log(a+b)
var c = "Harry";
console.log(typeof c)
const a1 = 6;
// a1 = a1 +1;   // Not allowed because a1 is const
console.log(a1)

// var is a global data type

var d = 7;
console.log(d)
{
    var d = 99;
    console.log(d)
}
console.log(d)

// Let is a block data type
let e = 7;
console.log(d)
{
    let e = 99;
    console.log(d)
}
console.log(d)

let r = "Harry";
let s = 5;
let t = 8.99;
const u = true;
let v = undefined;
let w = null;

console.log(r,s,t,u,v,w)
console.log(typeof r,typeof s,typeof t,typeof u,typeof v,typeof w)

let o = {
    "Name" : "Harry",
    "Job Code" : 5600, 
    "isHandsome" : true
}
console.log(o)
o.salary = "$5000";
console.log(o)