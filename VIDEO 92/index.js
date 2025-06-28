const express = require('express') // Import express module
const app = express() // Create express app
const port = 3000 // Define port number

app.set('view engine', 'ejs') // Set EJS as the view engine

// Define route for home page
app.get('/', (req, res) => {
    let siteName = "Adidas" // Website name
    let searchText = "Search Now" // Search button text
    let arr = ["India", "Pakistan", "SriLanka", "Australia"] // Array of countries
    // Render 'index' view and pass variables
    res.render("index", { siteName: siteName, searchText: searchText, arr})
})

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
