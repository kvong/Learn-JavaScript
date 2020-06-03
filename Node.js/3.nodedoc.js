// Description use documentation from https://nodejs.org/en/docs/
// to find how to get the current directory name

// Grab the http module
const http = require('http');

http.createServer(function (req, res){
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain

    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as dirname and filename
    res.end(__dirname + '\n' + __filename);
}).listen(3000);

console.log('Server running...');
