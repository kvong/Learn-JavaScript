// Pipe will take the output of one stream and use it as input to another stream

var fs = require('fs');

// Create a readStream and writeStream
var readStream = fs.createReadStream('text.txt', 'utf8')
var writeStream = fs.createWriteStream('write_text.txt');

// Feeding out readStream to our writeStream
readStream.pipe(writeStream);
