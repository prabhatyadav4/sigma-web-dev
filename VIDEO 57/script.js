console.log("This tutorial is a part of SIGMA Web Development Course")
let a = 1;
for (let i = 0; i < 10; i++){
    console.log(a+i);
}

let obj = {
    "name" : "Jarvis", 
    "company": "HP",
    "salary" : "$3400"
}

for (const key in obj){
    const element = obj[key];
    console.log(key, element)
}

for (const c of "Harry"){
    console.log(c)
}

let i = 2;
while(i<6){
    console.log(i)
    i++;    
}

let j = 0;
do{
    console.log(j)
    j++;
}
while(j<6);