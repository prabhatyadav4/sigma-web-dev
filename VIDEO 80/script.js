// Simple object with two properties
let obj = {
    a: 1,
    b: "Prabhat"
}
console.log(obj)

// Prototype inheritance using plain objects
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

// Set animal as prototype of rabbit
rabbit.__proto__ = animal;

// Animal class definition
class Animal {
    constructor(name) {
        this.name = name
        console.log('Object is created...');
    }
    eats() {
        console.log("I am eating...")
    }
    jumps() {
        console.log('I am jumping...');
    }
}

// Lion class extends Animal
class Lion extends Animal {
    constructor(name) {
        super(name) // Call parent constructor
        console.log('Object is create and it is a Lion...');
    }
    eats() {
        super.eats() // Call parent eats method
        console.log("I am eating meat...")
    }
    jumps() {
        console.log('I am lazy...');
    }
}

// Create Animal instance
let a = new Animal("Bunny")
console.log(a);

// Create Lion instance
let l = new Lion("Shera")
console.log(l);

// instanceof checks
console.log(l instanceof Lion);    // true
console.log(l instanceof Animal);  // true
console.log(a instanceof Animal);  // true
console.log(a instanceof Lion);    // false