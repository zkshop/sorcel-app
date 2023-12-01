'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const domains_1 = require('@3shop/domains');
const http_status_1 = require('http-status');
const JsonWebTokenClient_1 = require('../../../infra/JsonWebTokenClient');
const allowCors_1 = require('../../../middlewares/allowCors');
const method_1 = require('../../../middlewares/method');
const utils_1 = require('../../../utils');
const Token = (0, domains_1.AuthorizationTokenService)(
  (0, JsonWebTokenClient_1.JsonWebTokenClient)(),
);
async function handler(req, res) {
  const token = (0, utils_1.extractTokenFromAuthorization)(req.headers.authorization);
  if (!token || !Token.verify(token)) return res.status(http_status_1.UNAUTHORIZED).end();
  const userPayload = Token.getUserPayload(token);
  return res.status(http_status_1.OK).send(userPayload);
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('GET', handler));
