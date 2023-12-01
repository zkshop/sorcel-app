'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.extractTokenFromAuthorization = void 0;
const TOKEN_REGEX = new RegExp('^Bearer (.*)$');
const extractTokenFromAuthorization = (authorization) => {
  if (!authorization) return null;
  const token = authorization.match(TOKEN_REGEX);
  return token ? token[1] : null;
};
exports.extractTokenFromAuthorization = extractTokenFromAuthorization;
