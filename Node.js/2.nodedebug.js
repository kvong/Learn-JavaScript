// Description: Experiment with 'node debug'
// to find type on Content-Type below
//

// Grab the http module
const http = require('http')

// Create server and listen on port 3000
http.createServer(function (req, res) {
    var body = 'this is the body of the response';
    var content_length = body.length;

    // Specify the content type
    res.writeHead(200, {
        'Ccontent-Type': 'text/plain',
        'Content-Length': content_length
    });

    // Write content to <body>
    res.end(body);
}).listen(3000);

console.log('Server running');
