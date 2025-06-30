## Exercise: Generate Dummy Employee Data with Express and Mongoose

### Problem Statement

You are required to create an Express application that interacts with a MongoDB database using Mongoose. The application should manage a collection called `Employees` in a database named `Company`.

**Requirements:**

- Define an `Employee` schema with the following fields:
    - `name` (string)
    - `salary` (number)
    - `language` (string)
    - `isManager` (boolean)
- Implement a button labeled **Generate Data** on the frontend.
- When the **Generate Data** button is clicked:
    1. The `Employees` collection should be cleared.
    2. 10 new dummy employee records should be generated and inserted into the collection.  
         Example record:
         ```json
         {
             "name": "Harry",
             "salary": 20000,
             "language": "Python",
             "isManager": true
         }
         ```

### Notes

- Use Express for the backend server.
- Use Mongoose for MongoDB interactions.
- Ensure the collection is cleared before inserting new records each time the button is clicked.
- You may use any method to generate dummy data (e.g., hardcoded values, random generation, etc.).