var slugify = require('slugify') // Import the slugify package

let a = slugify('some string') // Convert string to slug with default separator
console.log(a);

const b = slugify('some string','_') // Convert string to slug with '_' as separator
console.log(b)