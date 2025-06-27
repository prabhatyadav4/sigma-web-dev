const express = require('express') // Import express module
const app = express() // Create express app
const port = 3000 // Set port number
const birds = require('./router/birds') // Import birds router
const shop = require('./router/shop') // Import shop router

app.use('/birds', birds) // Use birds router for /birds path
app.use('/shop', shop) // Use shop router for /shop path
app.use(express.static("public")) // Serve static files from public folder

// Handle GET, POST, PUT, DELETE requests
app.get('/get', (req, res) => {
  console.log('Hey, its a GET request.');
  res.send('Hello World, its a get request')
}).post('/', (req, res) => {
  console.log('Hey, its a POST request.');
  res.send('Hello World, its a POST request')
}).put('/put', (req, res) => {
  console.log('Hey, its a PUT request.');
  res.send('Hello World, its a PUT request')
})
.delete('/delete', (req, res) => {
  console.log('Hey, its a DELETE request.');
  res.send('Hello World, its a DELETE request')
})

app.get('/index', (req, res) => {
  console.log('Hey, its demo file.')
  res.sendFile('/templates/demo.html', {root: __dirname}) // Send demo.html file
})

app.get('/api', (req, res) => {
  console.log('Hey, its demo file.')
  res.json({a:1, b:2, c:3, d:4, name: ["Pankaj", "Prabhat", "Prakash"]}) // Send JSON response
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // Start server
})
