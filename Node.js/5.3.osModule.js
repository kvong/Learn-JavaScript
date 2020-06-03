// Description: Get information about the os using os module

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total Memory: ${totalMem}\nFree Memory: ${freeMem}\nAvailability: ${freeMem/totalMem}`);
