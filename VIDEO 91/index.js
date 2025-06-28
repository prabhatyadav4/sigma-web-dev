/*
You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders.
For example, these files become:

1. name.png
2. name.jpg
3. name.pdf
4. harry.zip
5. harry.pdf
6. cat.jpg
7. cat.zip

Convert into:

- /png/name
- /jpg/name, /jpg/cat
- /pdf/name, /pdf/harry
- /zip/jarry, /zip/cat

*/

import fs from "fs/promises" // Import promise-based fs module
import fsn from "fs"         // Import callback-based fs module
import path from "path"      // Import path module

const basepath = "C:\\PRABHAT\\SIGMA WEB DEVELOPMENT\\VIDEO 93" // Directory to organize

let files = await fs.readdir(basepath) // Read all files in the directory

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1] // Get file extension
    // Skip js and json files, and only process files with an extension
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        // Check if folder for extension exists
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to the existing folder
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            // Create folder for extension if it doesn't exist
            fs.mkdir(ext)
            // Move the file to the new folder
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}