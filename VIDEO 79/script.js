// Prompt user for the first number
let a = prompt("Enter first number: ");
// Prompt user for the second number
let b = prompt("Enter second number: ");

// Check if inputs are not numbers
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}

// Calculate the sum of the two numbers (as integers)
let sum = parseInt(a) + parseInt(b);

try {
  // Try to log the sum multiplied by x (x is not defined here, will cause error)
  console.log("The sum is: ", sum * x);
} catch (error) {
  // Handle the error if x is not defined
  console.log("Error happens");
} finally {
  // Always execute this block
  console.log("Files are closed and db connection is being closed");
}

// Define main function
function main() {
  let x = 1; // Define x inside the function
  try {
    // Try to log the sum multiplied by x
    console.log("The sum is: ", sum * x);
    return true
  } catch (error) {
    // Handle any errors
    console.log("Error happens");
    return false
  } finally {
    // Always execute this block
    console.log("Files are closed and db connection is being closed");
  }
}

// Call the main function and store the result in c
let c = main()