// Description: use an existing module in
// Grabbing the http module

// Grabbing default module that ships with node
const http = require('http');

// Now grad an external module we created
const sayHello = require('./4.0.1.hello.js');

console.log('Current module:');
console.log(sayHello);

// Using the module
console.log("Hello in english: " + sayHello.sayHelloInEnglish());
