// Description: Set up a 'hello world' server
//
// Grab the http module to perform server operations 
const http = require('http');

// Set server to localhost port 3000
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;

    // Specify content type
    res.setHeader('Content-Type', 'text/plain');

    // Put the following into <body>
    res.end('Hello World\n');
});

// Make server available on localhost and port specified above
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
