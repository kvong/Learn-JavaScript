const express = require('express');
const router = express.Router();

// Init data 
const websites = [
    {id: 1, url:"youtube.com"},
    {id: 2, url:"facebook.com"},
    {id: 3, url:"reddit.com"},
    {id: 4, url:"github.com"}
];


// ## Perform API functions ##

// Get site based on id given
router.get('/:id', (req, res) => {
    // Validate request and get website
    const website = websites.find(websites => websites.id === parseInt(req.params.id))
    if (!website) return res.status(404).send(`id '${req.params.id}' not found.`);
    res.send(website);
});

// Create new entry
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    let website = websites.find(websites => websites.id === parseInt(req.params.id));
    if (!website) return res.status(404).send('Invalid ID');

    const index = websites.indexOf(website);
    websites.splice(index, 1);
    res.send(websites);
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

module.exports = router;
