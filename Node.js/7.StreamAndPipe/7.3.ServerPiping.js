// Description: Use pipes to feed content from text file to the server


// Pipe will take the output of one stream and use it as input to another stream
var fs = require('fs');
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create a readStream
var readStream = fs.createReadStream('text.txt', 'utf8')


// Send the output of our pipe to the browser
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Feeding the readStream to http response
    readStream.pipe(res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
