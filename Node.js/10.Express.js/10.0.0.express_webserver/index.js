// Description: Create a simple webserver using express
const logger = require('./middleware/logger.js');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const config = require('config');

// Set up debugger
const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const debug = require('debug')('app:startup');

const app = express();

// Use templating engine
app.set('view engine', 'pug');
app.set('views', './views'); // default

// Environments
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // return node env or undefined
console.log(`app: ${app.get('env')}`); // return development by default


// Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server Name: ${config.get('mail.host')}`);
console.log(`Mail Server Password: ${config.get('mail.password')}`);

// [START] MIDDLEWARE
//
// Add middle ware 
// json() create json object from req.body
app.use(express.json());

// Takes: key=value&key=value
// read post request from input form
app.use(express.urlencoded({extended: true})); 

// Serve static content from 'public' directory to site
app.use(express.static('public'));

// Custom middleware function
app.use(function (req, res, next) {
    console.log('Logging...');

    // Passing to next function in middleware pipeline.
    // If we dont do this request will hang.
    next(); 
});

// Custom middleware function from externally
app.use(logger.auth);

// Using helmet - protect app from known web vulnerabilities
app.use(helmet());

// Log http requests only during development
if (app.get('env') === 'development') {
    // Using morgan - log request in 'tiny' format
    app.use(morgan('tiny'));
    console.log('Morgan enabled... ');
    debug('Debugger: Morgan enabled...');
}

// any route with '/api/courses' use courses.js
app.use('/api/courses', courses);

// any routes with '/' use home.js
app.use('/', home)
// [END]
//
dbDebugger('Debugger: Some database stuff...');

// Launch server on a port
// Check if port has been defined as an environment variable
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Listening on port ', port);
});

function validateCourse(course) {
    // Define schema with Joi
    const schema = {
        // validate name
        name: Joi.string().min(3).required()
    };

    // Get validation result
    return Joi.validate(course, schema);
}
