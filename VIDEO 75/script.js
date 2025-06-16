// Log message to console
console.log("Pankaj is hacker")
console.log("Prabhat is hacker")

// Run after 2 seconds
setTimeout(() => {
    console.log("Kavita is not a hacker")
},2000)

// Log message to console
console.log("Prakash is hacker")

// Callback function that logs its argument
const callback = (arg) => {
    console.log(arg)
}

// Function to load a script and call a callback
const loadScript = (src, callback) => {
    let sc = document.createElement("script") // Create script element
    sc.src = src // Set script source
    sc.onload = callback("Prabhat"); // Call callback immediately (not on load)
    document.head.append(sc) // Append script to document
}

// Load external script and call callback
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)