'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const domains_1 = require('@3shop/domains');
const http_status_1 = require('http-status');
const infra_1 = require('../../infra');
const allowCors_1 = require('../../middlewares/allowCors');
const method_1 = require('../../middlewares/method');
const account = (0, domains_1.MoneyAccountService)((0, infra_1.StripeAccountCreator)());
async function handler(req, res) {
  const { accountId } = req.query;
  try {
    const retrievedAccount = await account.getAccount(accountId);
    return res.status(http_status_1.OK).send({ account: retrievedAccount });
  } catch (error) {
    console.error(error);
    return res.status(http_status_1.INTERNAL_SERVER_ERROR).json({ error: error });
  }
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('GET', handler));
