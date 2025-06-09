// Initialize an array
let arr = [1, 2, 4, 5, 7];

console.log(arr); // Print the array
console.log(arr.length, typeof(arr)); // Print length and type
console.log(arr[0]); // Print first element

arr[1] = 566; // Update second element
console.log(arr[1]); // Print updated element
console.log(arr[2]); // Print third element
console.log(arr[3]); // Print fourth element
console.log(arr[4]); // Print fifth element

console.log(arr.toString()); // Convert array to string
console.log(arr.join(" & ")); // Join elements with " & "

// Array operations
let a = [1, 2, 5, 6, 8, 9];
a.pop(); // Remove last element
a.push(4); // Add 4 at the end
a.push("Prabhat"); // Add "Prabhat" at the end
a.shift(); // Remove first element
a.unshift("Jack"); // Add "Jack" at the start
delete a[5]; // Delete element at index 5 (leaves empty slot)
console.log(a); // Print modified array

// Concatenate arrays
let a1 = [1, 2, 3, 4];
let a2 = [1, 2, 3, 4];
let a3 = [1, 2, 3, 4];
let a4 = a1.concat(a2, a3); // Concatenate a1, a2, a3
console.log(a4);

// Splice and sort operations
let numbers = [2, 5, 5, 6, 3, 0];
numbers.splice(1, 2); // Remove 2 elements from index 1
console.log(numbers);

numbers.splice(1, 2, 44, 55); // Remove 2 elements from index 1, insert 44, 55
console.log(numbers);

numbers.reverse(); // Reverse the array
numbers.sort(); // Sort the array
console.log(numbers);
