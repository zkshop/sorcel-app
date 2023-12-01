'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const magic_server_sdk_1 = require('@3shop/magic-server-sdk');
const http_status_1 = require('http-status');
const allowCors_1 = require('../../../middlewares/allowCors');
const method_1 = require('../../../middlewares/method');
const domains_1 = require('@3shop/domains');
const JsonWebTokenClient_1 = require('../../../infra/JsonWebTokenClient');
const utils_1 = require('../../../utils');
const config_1 = require('@3shop/config');
const Token = (0, domains_1.AuthorizationTokenService)(
  (0, JsonWebTokenClient_1.JsonWebTokenClient)(),
);
async function handler(req, res) {
  if (!config_1.envVars.SECRET_JWT) return res.status(http_status_1.INTERNAL_SERVER_ERROR);
  const didToken = (0, utils_1.extractTokenFromAuthorization)(req.headers.authorization);
  if (!didToken) return res.status(http_status_1.UNAUTHORIZED);
  try {
    magic_server_sdk_1.magicSDK.token.validate(didToken);
    const metadata = await magic_server_sdk_1.magicSDK.users.getMetadataByToken(didToken);
    if (!metadata.email) return res.status(http_status_1.INTERNAL_SERVER_ERROR);
    const user = await (0, utils_1.getUser)(metadata.email);
    if (!user) return res.status(http_status_1.UNAUTHORIZED);
    const token = Token.sign(user.app_id, metadata);
    return res.status(http_status_1.OK).send({ token });
  } catch (error) {
    return res.status(http_status_1.INTERNAL_SERVER_ERROR).json({ error });
  }
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('POST', handler));
