import { HttpFunction } from '@google-cloud/functions-framework';

const handler: HttpFunction = async (req, res) => {
    return res.send('Hello from function __FN__ !');
}

export const __FN__ = handler;

// To apply middlewares to the handler, wrap the handler with the middleware functions.
// Example: export const myFunction = middleware1(middleware2(handler));