import path from 'path'

// Define the file path
let myPath = "C:\\PRABHAT\\SIGMA WEB DEVELOPMENT\\VIDEO 87\\file1.txt"

// Get and print the file extension
console.log(path.extname(myPath));

// Get and print the directory name
console.log(path.dirname(myPath));

// Get and print the base file name
console.log(path.basename(myPath));

// Join two paths and print the result
console.log(path.join("C:\\PRABHAT\\SIGMA WEB DEVELOPMENT\\VIDEO 87","/harry.txt"));