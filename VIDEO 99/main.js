const express = require('express') // Import express framework
const app = express() // Create express app
const mongoose = require('mongoose') // Import mongoose for MongoDB
const Employee = require('./models/Employee') // Import Employee model

mongoose.connect('mongodb://localhost:27017/company') // Connect to MongoDB
const port = 3000 // Define server port

app.set('view engine', 'ejs') // Set EJS as the view engine

// Helper function to get a random element from an array
const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

// Home route
app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'})
})

// Route to generate random employees
app.get('/generate', async (req, res) => { 

    await Employee.deleteMany({}) // Delete all existing employees

    let randomNames = ["Pankaj", "Prabhat", "Prakash"]
    let randomCities = ["Patna", "Muzaffarpur", "Bettiah"]
    let randomLang = ["C++", "Python", "Java"]

    // Create 10 random employees
    for(let index = 0; index < 10; index++){
        let e = await Employee.create({
            name : getRandom(randomNames),
            salary : Math.floor(Math.random() * 22000),
            language : getRandom(randomLang),
            city: getRandom(randomCities),
            isManager : (Math.random() > 0.5) ? true : false
        })
        console.log(e); // Log created employee
    }
    res.render('index', {foo: 'FOO'}) // Render index page
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
