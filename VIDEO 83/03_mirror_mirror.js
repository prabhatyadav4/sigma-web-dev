/* Q: The Mirror Mirror:
    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/

// Function to create a mirrored string
function mirrorString(str){
    // Reverse the input string
    let reversed = str.split("").reverse().join("");
    // Concatenate original and reversed strings
    let mirrored = str + reversed;
    return mirrored;
}

let input = "magic"; // Example input
let output = mirrorString(input); // Get mirrored string
console.log(output); // Output: magiccigam