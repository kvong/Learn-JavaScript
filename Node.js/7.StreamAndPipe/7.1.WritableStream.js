// Read stream and write at the same time. Do this continuously.

var fs = require('fs');

// Create a readStream
var readStream = fs.createReadStream('text.txt', 'utf8')

// Create a writeStream
var writeStream = fs.createWriteStream('write_text.txt');

// Read stream in chunks
// 'data' event triggers after the finished reading of a chunk
// write this chunk as we gets it.
readStream.on('data', (chunk) => {
    console.log('---------');

    writeStream.write(chunk);
})

// 'end' event fires after finishing reading the chunks
readStream.on('end', (chunk) => {
    console.log('---------END');
})



