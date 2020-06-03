// Well use read stream when we want to read a file in chunks
var fs = require('fs');

// Get event module and create EventEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();

// createReadStream inherits from eventEmitter
var readStream = fs.createReadStream('text.txt', 'utf8')

// Read stream in chunks
// createReadStream inherits eventEmitter by default so we dont have to do it .
// 'data' event fires after the finished reading of a chunk
readStream.on('data', (chunk) => {
    console.log('---------');
    console.log(chunk);
})

// 'end' event fires after finishing reading the chunks
readStream.on('end', (chunk) => {
    console.log('---------END');
    eventEmitter.emit('finished');
})

eventEmitter.on('finished', () =>{
    console.log('Event Triggered: All chunks has been read.');
});
