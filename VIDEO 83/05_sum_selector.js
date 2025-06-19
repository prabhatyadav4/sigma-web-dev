/* Q5: The Sum Selector:
    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

*/

// Function to sum numbers in array until a negative number is found
function sumUntilNegative(arr){
    let sum = 0; // Initialize sum to 0
    for(let i = 0; i < arr.length; i++){
     if(arr[i] < 0){ // Stop if a negative number is found
         break;
     }
     sum += arr[i]; // Add current number to sum
    }
    return sum; // Return the final sum
}

let input = [2,5,6,8,9,5,6,-6,6,8,6]; // Example input array
let output = sumUntilNegative(input); // Call the function with input
console.log(output); // Print the result