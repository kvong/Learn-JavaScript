//Description: Using promises

console.log('Before');

// Promise approach
//getUser(1)
//    .then(user => getRepo(user))
//    .then(repos => getCommits(repos))
//    .then(commits => console.log(commits))
//    .catch(err => console.log('Error: ', err.message));

// Async and Await approach for easier understanding
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepo(user.gitHubUsername);
        const commits = await getCommits(repos);
        console.log(commits);
    } catch (err) {
        console.log('Err', err.message);
    }
}

displayCommits();

console.log('After');

// Async functions [START]
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Read user from db...');

            // Execute the callback function with the object as an parameter
            resolve({id: id, gitHubUsername: 'blank'});
        }, 1000);
    });
}

function getRepo(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repositories...');

            // Execute the callback function with the object as an parameter
            resolve(['repo1', 'repo2', 'repo3']);
        }, 1000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Get commit history...');
            resolve(['commit1', 'commit2', 'commit3']);
        }, 1000);
    });
}
//[END]

