# Express.js Middleware Order Bug
This repository demonstrates a subtle bug related to the order of middleware functions in an Express.js application.  The incorrect placement of error-handling middleware can prevent other middleware from ever being executed.

## Bug Description
The bug lies in the order of middleware functions.  The error handler is defined *before* a regular middleware function.  Since error-handling middleware has four arguments (error, req, res, next), Express.js will always route errors to it.  Consequently, the regular middleware placed after it will never be reached.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Observe that the server starts, but the message "This will never be executed" is not sent by the server.

## Solution
The solution involves correctly ordering the middleware functions. Error-handling middleware must always be placed after all other middleware to allow for proper execution flow. 