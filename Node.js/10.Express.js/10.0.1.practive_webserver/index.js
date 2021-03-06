// Description: Practice project incorporating what we've learned so far.
//              Create an API that perform CRUD, with KEY id, and VALUE: url.

// Module declarations
const express = require('express');
const app = express();
const home = require('./routes/home');
const websites = require('./routes/websites');
const bodyParser = require('body-parser')

// Add middleware to work with json in express
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home);
app.use('/api/websites', websites);

const port = 3000;

// Set node to a port
app.listen(port, () => {
    console.log(`Server runnin on port ${port}`);
});
