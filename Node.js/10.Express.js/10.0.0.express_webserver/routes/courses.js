// express() contains functions to handle different HTTP requests.
/*
        app.get();
        app.post();
        app.put();
        app.delete();

Arguments: (url, (req, res) => {...});
*/
const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'couse1' },
    { id: 2, name: 'couse2' },
    { id: 3, name: 'couse3' }
];


// Define route on /
router.get('/', (req, res) => {
    res.send([1, 2, 3]);
});

// Define a route that return a single id
router.get('/:id', (req, res) => {
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
router.post('/', (req, res) => {

    // Get validation result
    const { error } = validateCourse(req.body);

    // Input validation
    if (error) {
        // 400 Bad Request
        res.status(404).send(error.details[0].message);
        res.send('404 Bad Request')
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    // Look up course by id
    let course = courses.find(courses => courses.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Id not deleted');
    
    // Delete
    const index = courses.indexOf(course);
    // Go to index and delete 1 object
    courses.splice(index, 1);
    
    res.send(courses)
})

module.exports = router;
