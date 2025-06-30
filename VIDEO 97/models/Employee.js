const mongoose = require('mongoose'); // Import mongoose library

// Define the schema for Employee documents
const employeeSchema = new mongoose.Schema({
    name: String,         // Employee's name
    salary: Number,       // Employee's salary
    language: String,     // Employee's preferred language
    city: String,         // Employee's city
    isManager: Boolean    // Is the employee a manager?
});

// Create the Employee model from the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee; // Export the Employee model