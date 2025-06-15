console.log("script.js is intializing") // Log initialization message

// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children // Get all children of .container

console.log(boxes) // Log the boxes collection

// Function to generate a random RGB color
function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * 255) // Random value for red
    let val2 = Math.ceil(0 + Math.random() * 255) // Random value for green
    let val3 = Math.ceil(0 + Math.random() * 255) // Random value for blue
    return `rgb(${val1}, ${val2}, ${val3})` // Return RGB color string
}

// Loop through each box and set random background and text color
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor() // Set random background color
    e.style.color = getRandomColor() // Set random text color
})
