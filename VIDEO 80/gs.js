// Define a User class
class User{
    // Constructor to initialize name
    constructor(name){
        this.name = name
    }
    // Getter for name property
    get name(){
        return this._name
    }
    // Setter for name property with validation
    set name(value){
        if(value.length < 4){
            console.log("Name is too short")
            return
        }
        this._name = value
    }
}

// Create a new User with name "John"
let user = new User("John")
console.log(user.name) // Output the user's name

// Try to create a User with an empty name
user = new User("")
// Set the user's name to "Prabhat"
user.name = "Prabhat"
console.log(user.name) // Output the updated name