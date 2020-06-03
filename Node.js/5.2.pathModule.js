// Description: Use path module to get file information

// Get the path module
const path = require('path');

// use path.parse to get the information about this file
var pathObj = path.parse(__filename);

// Print information about this file
console.log(pathObj);
