// Select the database to use.
use('PlaygroundDB');

// Insert a few documents into the 'courses' collection.
db.getCollection('courses').insertMany([
  {
    "Instructor": "KernalPrab", // Instructor's name
    "Name": "Java",             // Course name
    "Price": 20000              // Course price
  },
  {
    "Instructor": "AliceSmith",
    "Name": "Python",
    "Price": 18000
  },
  {
    "Instructor": "JohnDoe",
    "Name": "JavaScript",
    "Price": 15000
  },
  {
    "Instructor": "JaneTech",
    "Name": "C++",
    "Price": 22000
  },
  {
    "Instructor": "TechGuru",
    "Name": "Go",
    "Price": 17000
  },
  {
    "Instructor": "DevMaster",
    "Name": "Rust",
    "Price": 24000
  },
  {
    "Instructor": "CodeQueen",
    "Name": "Kotlin",
    "Price": 21000
  },
  {
    "Instructor": "DataDan",
    "Name": "SQL",
    "Price": 16000
  },
  {
    "Instructor": "CyberRick",
    "Name": "Cybersecurity Basics",
    "Price": 25000
  },
  {
    "Instructor": "MLMaya",
    "Name": "Machine Learning",
    "Price": 30000
  }
  // Add more course documents here if needed
]);

// Print a message after data insertion is complete.
console.log('Done! inserting Data.');
