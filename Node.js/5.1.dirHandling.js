// Description: Create folder and file and delete it.
// Show all files in directory in the end.

// Grab fs module
const fs = require('fs');

/* Deleting a file
fs.unlink('text.txt', (err) => {
    if (err)
        console.error('Unsuccessful unlink()');
    else
        console.log('Successful unlink()');
})
*/

// Creating a directory (Synchronously)
//fs.mkdirSync('node');
// Delete directory - must be empty
//fs.rmdirSync('node');

// Create directory (Running Asynch!)
fs.mkdir('node', (err) => {
    if (err)
        return console.error(err);;
    fs.writeFile('./node/node.txt', 'Input in file\n', (err, data) => {
        if (err)
            return console.error(err);
        console.log('File written');
    });
});

// Delete directory - must be empty (Running Async!)
// We will use setTimeout to see it work synchronously
setTimeout(() => {
    fs.unlink('./node/node.txt', (unlink_err) => {
        if (unlink_err)
            return console.error(unlink_err);
        console.log('File deleted');
        fs.rmdir('./node', (err) => {
            if (err)
                return console.error(err);
            console.log('Dir deleted');
        });
    });
}, 2);

// Show all directory (Running Async!)
// We will use setTimeout to see it work synchronously
setTimeout(() => {
    fs.readdir('./', (err, files) => {
        if (err)
            return console.error(error);
        console.log('ls result:');
        console.log(files);
    });
}, 3);
