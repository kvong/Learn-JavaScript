// Description: Create a class and extend it to
// EventEmitter class;

// Grab Events module
const events = require('events');

// Create a class named Liquid and extend it
// to use event functionalities
class Liquid extends events.EventEmitter{

    // Function that takes in a substance name
    // and print out it's properties
    properties(name){
        if (name == 'water') {
            console.log('Properties: H20');

            // Let the caller know that water 
            // has been found
            this.emit('waterCalled', name);
        }
        else{
            console.log('Unknown substance');
        }
    }
}

// Create a liquid object
var substance = new Liquid();

// Set a listener to run when 'water' is set as
// function argument
substance.on('waterCalled', (name) => {
    console.log('Substance Detected: Water');
});

// Set water as property
substance.properties('water')


