console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent)
// console.log(document.querySelector(".container").hidden = true)
console.log(document.querySelector(".box").innerText = "Hey I am Prabhat")
console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
console.log(document.querySelector(".box").setAttribute("style","display: inline"))
console.log(document.querySelector(".box").removeAttribute("style"))
console.log(document.querySelector(".box").dataset)
document.designMode = "on" 

let div = document.createElement("div")
div.innerHTML = "I have been inserted <b>by KernalPrab</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin", "<b>I am inserted afterbegin</b>")

console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)
console.log(document.querySelector(".container").classList.add("Prabhat"))
console.log(document.querySelector(".container").classList.remove("Prabhat"))
console.log(document.querySelector(".container").classList.toggle("red"))