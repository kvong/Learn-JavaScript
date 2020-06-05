// Description: Create a simple webserver using express
const Joi = require('joi');
const express = require('express');
const app = express();

// Add middle ware 
app.use(express.json());

// express() contains functions to handle different HTTP requests.
/*
        app.get();
        app.post();
        app.put();
        app.delete();

Arguments: (url, (req, res) => {...});
*/

const courses = [
    { id: 1, name: 'couse1' },
    { id: 2, name: 'couse2' },
    { id: 3, name: 'couse3' }
];

// ## USE GET TO LOOK UP ##
//
// Define route on root
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define route on /api/courses
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

// Define a route that return a single id
app.get('/api/courses/:id', (req, res) => {
    // To check for query
    // let query = req.query;
    // res.send(query);   

    let course = courses.find(courses => courses.id === parseInt(req.params.id));
    if (!(course)) { // 404
        res.status(404);
        res.send('Not found');
        return;
    }
    res.send(course);
});

// ## USE POST TO CREATE ## 
app.post('/api/courses/', (req, res) => {

    // Get validation result
    const { error } = validateCourse(req.body);

    // Input validation
    if (error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        res.send('400 Bad Request')
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// ## USE PUT TO UPDATE ##
app.put('/api/courses/:id', (req, res) => {
    // Look up course with existing id
    let course = courses.find(courses => courses.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Id not updated');

    // Validate
    let { error } = validateCourse(req.body);

    // Input validation
    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message);
        res.send('400 Bad Request')
        return;
    }

    // Update
    course.name = req.body.name;
    res.send(course);

});

// ## USE DELETE ## //
app.delete('/api/courses/:id', (req, res) => {
    // Look up course by id
    let course = courses.find(courses => courses.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Id not deleted');
    
    // Delete
    const index = courses.indexOf(course);
    // Go to index and delete 1 object
    courses.splice(index, 1);
    
    res.send(courses)
})

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
