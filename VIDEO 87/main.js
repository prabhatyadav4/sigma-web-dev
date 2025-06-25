const fs = require("fs") // Import the 'fs' module for file operations

console.log('File-1 creation started...');

// Synchronously write to file1.txt
fs.writeFileSync("file1.txt", "This is a demo file-1.", ()=> {
    console.log('Writing file content...');
})

console.log('File-1 creation done.');


console.log('File-2 creation started...');

// Asynchronously write to file2.txt
fs.writeFile("file2.txt", "This is a demo file-2.", ()=> {
    console.log('Writing file content...');
})

console.log('File-2 creation done.');

// Append text to file1.txt asynchronously
fs.appendFile('file1.txt',' Append: Demo-1', (err) => {
  if (err) throw err;
});

// Read and print contents of file1.txt asynchronously
fs.readFile('file1.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Append text to file2.txt asynchronously
fs.appendFile('file2.txt',' Append: Demo-2', (err) => {
  if (err) throw err;
});

// Read and print contents of file2.txt asynchronously
fs.readFile('file2.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
