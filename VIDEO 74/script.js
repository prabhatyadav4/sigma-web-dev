console.log("script.js is initialized") // Log initialization message

let button = document.getElementById("btn") // Get the button element by ID

// Add click event listener to the button
button.addEventListener("click", () => {
    alert("I was clicked") // Show alert when button is clicked
})

// Add keydown event listener to the document
document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode) // Log the key and its keyCode when a key is pressed
})