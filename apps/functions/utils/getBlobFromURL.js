'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.blobFromURL = void 0;
const cross_fetch_1 = __importDefault(require('cross-fetch'));
async function blobFromURL(url) {
  const data = await (0, cross_fetch_1.default)(url);
  return data.blob();
}
exports.blobFromURL = blobFromURL;
