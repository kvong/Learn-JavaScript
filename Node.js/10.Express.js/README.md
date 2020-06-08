# Express.js
Makes working with Node.js easier.

## RESTful Services
We use express to create RESTful APIs. With the REST architecture we can create, retrieving, update, and delete data (CRUD) using different HTTP requests. 
* **POST** - Create data
* **GET** - Retrieve data
* **PUT** - Update data
* **DELETE** - Delete data

## Middleware
Middleware functions takes the request and either send a respond, or pass the control to another middleware function with `next()`. To end the passing of controls, we must send a response.

We can also create custom middleware functions externally and export them as a module.

There exists third-party middlewares but use it carefully as it will slow down request processing.


