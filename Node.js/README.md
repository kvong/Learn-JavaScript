## What is Node.js?
Node.js is a JavaScript runtime environment that operates on the server-side of web applications. It is open source, and platform independent.

## Why use Node.js?
Node.js lets us perform operation on the server-side with JavaScript, which was originally only allowed on the client-side. This makes it easier to develop website as anyone interested in desigining mid-range websites only need to learn HTML, CSS, and JavaScript.

## Asynchronous
All APIs of Node.js is asynchronous. That is, it's are non-blocking. General programming languages are typically synchronous, meaning it doesn't move to the next line of code until the current line has finished its execution. Node.js function call however, will move to the next line by executing the current line in a different thread. Once the function is finished executing, it will then return to the main thread.

## Callbacks
A callback is a function that execute upon the completion of an asynchronous operation. In Node.js this is used to trigger events.

## Event Driven
Events are designed to handle asynchronous function calls. With the asynchronous call, we can trigger an event upon completion to perform the next task.

## Event Loop
When an asynchronous line of code is called (usually an API call), that line of code is executed on a different thread because the process is very slow. Insteading of stopping the main execution there, we simply move forward to the next line on the main thread. Once the Async code finish execution the Callback function is placed on an Event Queue. After the main thread has executed **all** the functions in the Function Stack (stack to determine what to execute next), it will take a look at the Event Queue (queue of Callback functions) to execute the Callback functions.


## Single Thread
Javascript as a whole is single threaded. However it should be noted that the browser supports multi-threading which we can utilize to perform parallelism using asynchronous API calls (with C++ on the backend, which can do parallel execution).

## NPM
Node's default package manager is called Npm. It is installed along with Node.js; npm is hosts thousands of free packages. These packages contain files to use Node modules. Modules are JavaScript libraries you can use in your project.

[Official Npm page](https://www.npmjs.com/)
[Basic Npm](./9.NPM/README.md)
