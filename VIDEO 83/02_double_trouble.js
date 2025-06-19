/* Q2: The Double Trouble:
    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/

// Function to double elements without consecutive duplicates
function doublesWithoutConsecutiveDuplicates(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        // Skip if current element is same as previous (consecutive duplicate)
        if(i > 0 && arr[i] == arr[i-1]){
            continue;
        }
        // Double the element and add to result
        result.push(arr[i]*2);
    }
    return result;
}

let numbers = [2,2,4,4,4,5,7,64,3]; // Input array
let output = doublesWithoutConsecutiveDuplicates(numbers); // Call function
console.log(output); // Print result