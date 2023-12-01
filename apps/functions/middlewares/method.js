'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.method = void 0;
const http_status_1 = require('http-status');
const method = (method, next) => async (req, res) => {
  if (req.method !== method) {
    return res.status(http_status_1.METHOD_NOT_ALLOWED);
  }
  return await next(req, res);
};
exports.method = method;
