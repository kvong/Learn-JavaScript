const http = require('http');

const port_number = 3000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Hello World');
    }

    if (req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
    }

    res.end();
}).listen(port_number);;

// Set a event to run on successful connection
server.on('connection', (socket) => {
    console.log('Connection made...');
})
