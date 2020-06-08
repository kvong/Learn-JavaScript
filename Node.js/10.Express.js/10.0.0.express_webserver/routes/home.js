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

// ## USE GET TO LOOK UP ##
// Define route on root
router.get('', (req, res) => {
    // res.send('Hello World');
    // Another way using templating engine
    res.render('index', {title: 'My Express App', message: 'Hello'})
});

module.exports = router;
