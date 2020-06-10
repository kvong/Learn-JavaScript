# Asynchronuous Programming
Suppose we're running our program and we reached a point where we have to fetch data from an external source such as a .dat file or a database. This fetch will take a lot of time if the code is run Synchronously, meaning it won't execute the next line of code until the current line finished it's execution. With asynchronous programming we can move to the next line while we wait for the fetch to finish.

## Callbacks
A callback function is a function that runs after an asynchronous operation had been performed. The problem with callbacks is it's messy. Nested callback functions can get so big that some calls it _callback-hell_. To mediate this **promises** were introduced

#### Callback Syntax
```
function <name>(args..., callback){
    callback(param...);
}
```

## Promises
Promises were created to resolve _callback-hell_ problem. With promises we can `resolve` when the operation completes successfully and `reject()` when the operation fails.
#### Syntax
```
const promise = new Promise((resolve, reject) =>{
    if ()
        resolve(<return-val>)
    else
        reject(<error-val>)
})

promise
    .then(do something with <return-val>)
    // more .then() as needed
    .catch(do something with <return-val>);
```


## Async / Await
To write promises in a nicer way, there exists `Async` and `Await`. Unlike callbacks and promises, which are different from one another, async/await is the same as promises. It work with promises to create a even better looking code
#### Syntax
```
async function <f-name>(){
    try{
        const <async1> = await <function-that-return-a-promise>
        const <async2> = await <function-that-return-a-promise>
        ...
    }
    catch(error){
        // Error operation
    }
}
```
