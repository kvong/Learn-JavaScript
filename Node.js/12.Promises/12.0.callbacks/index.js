//Description

console.log('Before');
getUser(1, getRepos);
console.log('After');

// Solve callback hell problem with named functions[START]
function getRepos(user) {
    console.log(user);
    getRepo(user, getCommit);
}

function getCommit(repos) {
    console.log(repos);
    getCommits(repos, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}
//[END]

// Async functions [START]
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Read user from db...');

        // Execute the callback function with the object as an parameter
        callback({id: id, gitHubUsername: 'blank'});
    }, 1000);
}

function getRepo(username, callback) {
    setTimeout(() => {
        console.log('Getting repositories...');

        // Execute the callback function with the object as an parameter
        callback(['repo1', 'repo2', 'repo3']);
    }, 1000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Get commit history...');
        callback(['commit1', 'commit2', 'commit3']);
    }, 1000);
}
//[END]

