// Description: Practice project incorporating what we've learned so far.
//              Create an API that perform CRUD, with KEY id, and VALUE: url.

// Module declarations
const Joi = require('joi');
const express = require('express');
const fs = require('fs');
const app = express();

// Add middleware to work with json in express
app.use(express.json());

const port = 3000;

// Show html page on root address
app.get('/', (req, res) => {
    const htmlReadStream = fs.createReadStream('root.html', 'utf8');
    htmlReadStream.pipe(res);
});

// Init data 
const websites = [
    {id: 1, url:"youtube.com"},
    {id: 2, url:"facebook.com"},
    {id: 3, url:"reddit.com"},
    {id: 4, url:"github.com"}
];


// ## Perform API functions ##
// View all sites
app.get('/api/websites/', (req, res) => {
    res.send(websites);
});

// Get site based on id given
app.get('/api/websites/:id', (req, res) => {
    // Validate request and get website
    const website = websites.find(websites => websites.id === parseInt(req.params.id))
    if (!website) return res.status(404).send(`id '${req.params.id}' not found.`);
    res.send(website);
});

// Create new entry
app.post('/api/websites/', (req, res) => {
    // Validate 
    const {error} = validateWebsite(req.body);
    if (error) {
        res.status(404).send('Request failed validation step');
        return;
    }
    
    // Create new website entry
    const website = {
        id: websites.length + 1,
        url: req.body.url
    };

    // Add website to json object
    websites.push(website);
    res.send(website);
});

// Update entry using id
app.put('/api/websites/:id', (req, res) => {
    const {error} = validateWebsite(req.body);
    if (error) return res.status(404).send('Request failed validation step');

    // Update existing json obj
    const web_id = parseInt(req.params.id);
    if (validateId) {
        newUrl(req.body.url, web_id);
        let website = getWebsite(web_id);
        if (website){
            res.send(website);
            return;
        }
    }

    return res.status(404).send('Invalid ID');
});

// Delete entry using id
app.delete('/api/websites/:id', (req, res) => {
    let website = websites.find(websites => websites.id === parseInt(req.params.id));
    if (!website) return res.status(404).send('Invalid ID');

    const index = websites.indexOf(website);
    websites.splice(index, 1);
    res.send(websites);
});

// Set node to a port
app.listen(port, () => {
    console.log(`Server runnin on port ${port}`);
});

// Get website based on ID
function getWebsite(id) {
    for (let i = 0; i < websites.length; i++ ){
        if (websites[i].id == id) {
            return websites[i];
        }
    }
    return null;
}

// Setting url by ID
function newUrl(url, id) {
    for (let i = 0; i < websites.length; i++ ){
        if (websites[i].id === id) {
            websites[i].url = url;
        }
    }
}

// Validate ID exists
function validateId(id){
    for (let i = 0; i < websites.length; i++ ){
        if (id === websites[i].id) 
            return true;
    }
    return false;
}

// Validate website
function validateWebsite(website) {
    const schema = {
        url : Joi.string().min(5).required()
    };

    return Joi.validate(website, schema)
}
