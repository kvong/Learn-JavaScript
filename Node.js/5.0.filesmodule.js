// Description: 

// Add filesystem module 'fs'
const fs = require('fs');

// Read file synchronously
var read_string = fs.readFileSync('test.txt', 'utf8');
// View content
console.log(read_string);

// Write file synchronously
console.log('Sync Mode');
fs.writeFileSync('text.txt', read_string);

// Asyncronous node runs top down until it finds a async line, then it will split off and that code in differen thread
// Once done, the thread is added back to the main thread

console.log('Async Mode');
// Read file asynchronously
var read_string = fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err)
        return console.error(err);
    console.log(data);
})
// Asynchronous mode will not wait for file read/write to end before executing the next line

console.log('Done');

fs.writeFile('tet.txt', read_string, (err, data) => {
    if (err)
        return console.error(err);
    console.log('Successfully written');
})
