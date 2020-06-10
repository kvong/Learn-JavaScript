
const p = Promise.resolve({id: 1});
p.then(result => {console.log(result)})

const q = Promise.reject(new Error('My error message'));
q.catch(result => {console.log(result)})

// Multiple asynchronous operations
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

// Do when both operations are done
// Note that if one fail all will fail
Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err));

// Resolve on first promise consumed
Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log(err));
