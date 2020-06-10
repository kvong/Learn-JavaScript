const p = new Promise((resolve, reject) => {
    // Do async stuff
    // ...
    
    setTimeout(() => {
        //resolve(1);
        reject(new Error('Error message'));
    }, 2000);
});

// Promise class that 'then' and 'catch' associated with 'resolve' and 'reject' respectively
// .then(function(param)) will execute the function if the promise execute resolvethen(param)
// .catch(function(err)) will execute when reject(param) is executed.
p.then(result => console.log('Result: ', result)).catch(err => console.log('Error: ', err.message));
