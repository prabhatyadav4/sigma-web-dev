/* Q6: The Vowel Counter:
    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/

// Function to count vowels in a string
function countVowels(str){
     let vowels = "aeiouAEIOU"; // String containing all vowels
     let count = 0; // Initialize count to 0

     // Loop through each character in the string
     for(let i = 0; i < str.length; i++){
          // Check if the character is a vowel
          if(vowels.includes(str[i])){
                count++; // Increment count if vowel found
          }
     }
     return count; // Return the total count
}

let input = "Prabhat"; // Input string
let output = countVowels(input); // Call the function
console.log(output); // Print the result
