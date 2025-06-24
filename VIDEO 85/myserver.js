const { createServer } = require('node:http'); // Import the createServer function from the http module

const hostname = '127.0.0.1'; // Define the server hostname (localhost)
const port = 3000; // Define the port number

// Create the HTTP server
const server = createServer((req, res) => {
    res.statusCode = 200; // Set response status code to 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Set response content type to plain text
    res.end('Hello World'); // Send response body
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // Log server URL
});