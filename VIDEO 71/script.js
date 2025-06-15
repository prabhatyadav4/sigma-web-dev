// Log the inner HTML of the element with class "container"
console.log(document.querySelector(".container").innerHTML)

// Log the outer HTML of the element with class "container"
console.log(document.querySelector(".container").outerHTML)

// Log the inner text of the element with class "container"
console.log(document.querySelector(".container").innerText)

// Log the tag name of the element with class "box"
console.log(document.querySelector(".box").tagName)

// Log the node name of the element with class "container"
console.log(document.querySelector(".container").nodeName)

// Log the text content of the element with class "container"
console.log(document.querySelector(".container").textContent)

// Hide the container element (commented out)
// console.log(document.querySelector(".container").hidden = true)

// Set inner text of .box and log the new value
console.log(document.querySelector(".box").innerText = "Hey I am Prabhat")

// Check if .box has a "style" attribute
console.log(document.querySelector(".box").hasAttribute("style"))

// Get the value of the "style" attribute from .box
console.log(document.querySelector(".box").getAttribute("style"))

// Set the "style" attribute of .box to "display: inline"
console.log(document.querySelector(".box").setAttribute("style","display: inline"))

// Remove the "style" attribute from .box
console.log(document.querySelector(".box").removeAttribute("style"))

// Log the dataset (data-* attributes) of .box
console.log(document.querySelector(".box").dataset)

// Enable document-wide editing mode
document.designMode = "on"

// Create a new div, set its HTML and class, and append it to .container
let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>by KernalPrab</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)

// Insert HTML at the beginning of .container
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin", "<b>I am inserted afterbegin</b>")

// Log the class list of .container
console.log(document.querySelector(".container").classList)

// Log the class name(s) of .container
console.log(document.querySelector(".container").className)

// Add the "Prabhat" class to .container
console.log(document.querySelector(".container").classList.add("Prabhat"))

// Remove the "Prabhat" class from .container
console.log(document.querySelector(".container").classList.remove("Prabhat"))

// Toggle the "red" class on .container
console.log(document.querySelector(".container").classList.toggle("red"))