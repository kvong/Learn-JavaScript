// Description: Using express.js to handle routing

// Grab express module
var express = require('express');

// Create express instance
var app = express();

// Set express to use 'EJS' as viewing engine
app.set('view engine', 'ejs');

// Express by default use http GET 
app.get('/', (req, res) => {
    // Respond to '/' with a html page
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
    // Respond with a text
    res.send('this is about page');
});

app.get('/content', (req, res) => {
    // Respond with a text
    res.send('this is content page');
});

// Get params from get and send respond
app.get('/student/:name/:id', (req, res) => {
    let id = req.params.id;
    let name = req.params.name;

    // Whatever we send will be in <body>
    res.send('You have requested the student:<br>Name: ' + name + '<br>ID:' + id );
});

// Process params using EJS
app.get('/student-ejs/:name/:id/', (req, res) => {
    res.render('students', {name: req.params.name, id: req.params.id});
});

app.listen(3000, () => {
    console.log('Server live on port 3000');
});
