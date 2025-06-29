import mongoose from "mongoose" // Import mongoose for MongoDB interaction
import express from "express"   // Import express for server creation
import {Todo} from "./models/todo.js" // Import Todo model

await mongoose.connect("mongodb://localhost:27017/todoDB") // Connect to MongoDB
const app = express() // Create express app
const port = 3000     // Set server port

// Route to create a new Todo and send a response
app.get('/', async (req, res) => {
    await new Todo({title: "First ToDo", desc: "Hey, this is my first todo list", isDone: false}).save()
    res.send('Hello World!')
})

// Route to fetch one Todo and return its title and description as JSON
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({title: todo.title, desc: todo.desc})
})

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})