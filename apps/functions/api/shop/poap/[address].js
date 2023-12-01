'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const poap_1 = require('@3shop/poap');
const allowCors_1 = require('../../../middlewares/allowCors');
const method_1 = require('../../../middlewares/method');
const http_status_1 = require('http-status');
async function handler(req, res) {
  const { address } = req.query;
  try {
    if (typeof address !== 'string') throw new Error('No address specified');
    const { data } = await poap_1.poap.get((0, poap_1.getEveryPoapURL)(address));
    return res.status(http_status_1.OK).send({
      data,
    });
  } catch (error) {
    return res.status(http_status_1.INTERNAL_SERVER_ERROR).send({
      error,
    });
  }
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('GET', handler));
