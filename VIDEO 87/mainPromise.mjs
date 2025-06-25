import fs from 'fs/promises';

// Start creating File-1
console.log('File-1 creation started...');

// Write initial content to File1.txt
await fs.writeFile("File1.txt", "This is a demo file-1.");
console.log('File-1 creation done.');

// Start creating File-2
console.log('File-2 creation started...');

// Write initial content to File2.txt
await fs.writeFile("File2.txt", "This is a demo file-2.");
console.log('File-2 creation done.');

// Append text to File1.txt
await fs.appendFile("File1.txt", " Append: Demo-1");
console.log('Appended to File-1.');

// Read and display content of File1.txt
const data1 = await fs.readFile("File1.txt", "utf-8");
console.log("File1.txt content:\n", data1);

// Append text to File2.txt
await fs.appendFile("File2.txt", " Append: Demo-2");
console.log('Appended to File-2.');

// Read and display content of File2.txt
const data2 = await fs.readFile("File2.txt", "utf-8");
console.log("File2.txt content:\n", data2);
