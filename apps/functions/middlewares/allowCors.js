'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.allowCors = exports.debug = void 0;
const http_status_1 = require('http-status');
const debug = (message, next) => async (req, res) => {
  console.log(`message\n`);
  return await next(req, res);
};
exports.debug = debug;
const allowCors = (next) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  );
  if (req.method === 'OPTIONS') {
    return res.status(http_status_1.OK).end();
  }
  return await next(req, res);
};
exports.allowCors = allowCors;
