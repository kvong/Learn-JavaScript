// Description: Read json file into an object with Node.js

// Add filesystem module to read json file
const fs = require('fs');

// Use event to trigger an operation when json file is fully read
const events = require('events');
var EventEmitter = new events.EventEmitter();

// Create async read stream to read data.json
var readStream = fs.createReadStream('data.json', 'utf8');

// Init holder for json text
var json_txt = "";

// readStream to read chunks at a time
readStream.on('data', (chunk) => {
    // Append chunk
    json_txt += chunk;
});

// Set listener to perform operation on json_text when 
// readStream finishes
EventEmitter.on('finished', () => {
    // Load json string to an object
    let json_data = JSON.parse(json_txt);
    let length = json_data.employees.length;

    // Print employee data from the json file
    for (let i = 0; i < length; i++ ){
        let fname = json_data.employees[i].firstName;
        let lname = json_data.employees[i].lastName;
        console.log(`Employee ${i}: ${fname} ${lname}`);
    }
});

// Set listener to activate when readStream finishes reading
readStream.on('end', (chunk) => {
    EventEmitter.emit('finished');
});
