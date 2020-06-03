// Pipe will take the output of one stream and use it as input to another stream

var fs = require('fs');
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;



// Send the output of our pipe to the browser
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // Rather than 'plain' send it as html
    res.setHeader('Content-Type', 'text/html');

    // Create a readStream
    var readStream = fs.createReadStream('index.html', 'utf8')
    
    // Feeding out readStream to our http response
    readStream.pipe(res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
