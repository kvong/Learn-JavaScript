// Description: Routing based on params from url

// Get modules
var fs = require('fs');
var http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Send the output of our pipe to the browser
const server = http.createServer((req, res) => {
    // View url request
    console.log('requested url: ' + req.url);

    // Display different page depending on url
    if (req.url === '/about' || req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    }
    else if (req.url === '/api') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        // Create JSON object
        var jsonObj = {
            name: 'max',
            nickname: 'maximum',
            age : 26
        };

        var strJson = JSON.stringify(jsonObj);

        // Convert to string
        res.end(strJson);
        console.log('Json Object:');
        console.log(strJson);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('404.html').pipe(res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
