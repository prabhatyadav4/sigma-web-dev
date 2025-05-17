console.log("This tutorial is a part of SIGMA Web Development Course") // Print course info

let a = 1;
// For loop: prints numbers from a to a+9
for (let i = 0; i < 10; i++){
    console.log(a+i);
}

let obj = {
    "name" : "Jarvis", 
    "company": "HP",
    "salary" : "$3400"
}

// For-in loop: iterate over object properties
for (const key in obj){
    const element = obj[key];
    console.log(key, element)
}

// For-of loop: iterate over each character in string
for (const c of "Harry"){
    console.log(c)
}

let i = 2;
// While loop: prints numbers from 2 to 5
while(i<6){
    console.log(i)
    i++;    
}

let j = 0;
// Do-while loop: prints numbers from 0 to 5
do{
    console.log(j)
    j++;
}
while(j<6);