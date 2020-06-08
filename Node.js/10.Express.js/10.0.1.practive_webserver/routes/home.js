const fs = require('fs');
const express = require('express');
const router = express.Router();

// Show html page on root address
router.get('', (req, res) => {
    const htmlReadStream = fs.createReadStream('./root.html', 'utf8');
    htmlReadStream.pipe(res);
});

module.exports = router;
