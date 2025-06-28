import fs from "fs/promises" // Import promise-based fs module
import fsn from "fs" // Import callback-based fs module
import path from "path" // Import path module

const basepath = "C:\\PRABHAT\\SIGMA WEB DEVELOPMENT\\VIDEO 93" // Set base directory

let files = await fs.readdir(basepath) // Read all files in the base directory

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1] // Get file extension
    // Check if file is not js or json and has an extension
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {

        // If directory for extension exists
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to the directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext) // Create directory for extension
            // Move the file to the new directory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}