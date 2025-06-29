import mongoose from "mongoose" // Import mongoose library

// Define the schema for Todo items
const TodoSchema = new mongoose.Schema({
    title: String,      // Title of the todo
    desc: String,       // Description of the todo
    isDone: Boolean     // Status if the todo is done
}, { timestamps: true }) // Automatically add createdAt and updatedAt fields

// Create and export the Todo model
export const Todo = mongoose.model('todo', TodoSchema)