// Description: Basic event and trigger

// Grab Events module and create Events Emitters
const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked', () => {
    console.log('Button has been clicked');
})

eventEmitter.emit('clicked')


// Description: Create a class and have it inherit 
// from eventEmitter

// Advanced operation with 'util'
const util = require('util');

// Create a class of Liquid
var Liquid = function(name){
    this.name = name;
}

// Liquid inherits the eventEmitter
util.inherits(Liquid, events.EventEmitter);

// Create an object
var liquid_1 = new Liquid('water');

// Event listener for element
liquid_1.on('elements', (name) => {
    if (name == 'water')
        console.log('H20');
    else
        console.log('unknown substance');
});

// Triggering the listener
liquid_1.emit('elements', liquid_1.name);
