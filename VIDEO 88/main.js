const express = require('express')
const app = express()
const port = 3000

// Serve static files from the 'public' directory
app.use(express.static('public'))

// Home route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// About route
app.get('/about', (req, res) => {
    res.send('Hello About!')
})

// Contact route
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

// Blog route
app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
})

// Blog post route with slug parameter
app.get('/blog/:slug', (req, res) => {
    console.log(req.params) // Log route parameters
    console.log(req.query)  // Log query parameters
    res.send(`Hello ${req.params.slug}`)
})

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})