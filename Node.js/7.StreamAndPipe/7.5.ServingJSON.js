// Pipe will take the output of one stream and use it as input to another stream

var fs = require('fs');
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Send the output of our pipe to the browser
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // Rather than 'plain' send it as html
    res.setHeader('Content-Type', 'application/json');

    // Create JSON object
    var jsonObj = {
        name: 'max',
        nickname: 'maximum',
        age : 26
    };

    // Convert to string
    res.end(JSON.stringify(jsonObj));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
