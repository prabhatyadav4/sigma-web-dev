const express = require('express') // Import express
const app = express() // Create express app
const port = 3000 // Set port
const fs = require('fs') // Import file system module
const birds = require('./router/birds') // Import birds router

app.use('/birds', birds) // Use birds router for /birds path
// app.use(express.static("public")) // Serve static files from public folder (commented out)

// Middleware 1: Log request method and timestamp to logs.txt
app.use((req, res, next) =>{
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  next()
})

// Middleware 2: Log to console
app.use((req, res, next) =>{
  console.log('M-2');
  next()
})

// Route for home page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route for contact page
app.get('/contact', (req, res) => {
  res.send('Contact Us')
})

// Route for about page
app.get('/about', (req, res) => {
  res.send('About Us')
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
