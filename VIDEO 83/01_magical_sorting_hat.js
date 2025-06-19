/* Q1: The Magical Sorting Hat:
    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes  an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
*/


// Function to sort students into Hogwarts houses based on name length
function sortStudents(students){
    let sorted = {}; // Object to store student-house mapping
    
    for(let i = 0; i < students.length; i++){
        let name = students[i];
        let house = "";

        // Assign house based on the length of the student's name
        if(name.length < 6){
            house = "Gryffindor";
        }
        else if(name.length < 8){
            house = "Hufflepuff";
        }
        else if(name.length < 12){
            house = "Ravenclaw";
        }
        else {
            house = "Slytherin";
        }
        sorted[name] = house; // Add to result object
    }
    return sorted; // Return the mapping
}

// List of student names
let students = ["Harry", "Luna", "Hermione", "Neville", "Cedric", "Bellatrix", "Pankaj", "Prabhat", "Prakash", "Kavita", "Bacha", "Davanamati"];
let result = sortStudents(students); // Get sorted result
console.log(result); // Output the result