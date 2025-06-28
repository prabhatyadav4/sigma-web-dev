// Switch to 'CrudDB' database
use('CrudDB')

// Create 'courses' collection
db.createCollection('courses')

// Insert a single course document
db.courses.insertOne({
    Name: "SIGMA Web Dev Express",
    Price: 0,
    Assignments: 12,
    Projects: 5
})

// Insert multiple course documents
db.courses.insertMany([
  {
    "Name": "Alpha Coding Bootcamp",
    "Price": 99,
    "Assignments": 15,
    "Projects": 3
  },
  {
    "Name": "Beta Full Stack Mastery",
    "Price": 199,
    "Assignments": 20,
    "Projects": 6
  },
  {
    "Name": "Gamma Frontend Focus",
    "Price": 49,
    "Assignments": 10,
    "Projects": 2
  },
  {
    "Name": "Delta Backend Pro",
    "Price": 129,
    "Assignments": 18,
    "Projects": 4
  },
  {
    "Name": "Omega UI/UX Starter",
    "Price": 75,
    "Assignments": 8,
    "Projects": 1
  },
  {
    "Name": "Lambda Python Basics",
    "Price": 0,
    "Assignments": 14,
    "Projects": 3
  },
  {
    "Name": "Theta AI Essentials",
    "Price": 150,
    "Assignments": 12,
    "Projects": 5
  },
  {
    "Name": "Zeta Cloud Dev",
    "Price": 179,
    "Assignments": 16,
    "Projects": 4
  },
  {
    "Name": "Epsilon JS Advanced",
    "Price": 89,
    "Assignments": 13,
    "Projects": 2
  },
  {
    "Name": "Kappa DevOps Crash Course",
    "Price": 109,
    "Assignments": 11,
    "Projects": 3
  }
])

// Find all courses with Price 0
let a = db.courses.find({Price: 0})
console.log(a); // Print cursor object
console.log(a.count()); // Print count of matching documents
console.log(a.toArray()); // Print array of matching documents

// Find one course with Price 0
let b = db.courses.findOne({Price: 0})
console.log(b); // Print the found document

// Update first course with Price 0 to Price 1
db.courses.updateOne({Price: 0}, {$set:{Price: 1}})

// Update all courses with Price 0 to Price 100
db.courses.updateMany({Price: 0}, {$set:{Price: 100}})

// Delete one course with Price 1
db.courses.deleteOne({Price: 1})

// Delete all courses with Price 100
db.courses.deleteMany({Price: 100})