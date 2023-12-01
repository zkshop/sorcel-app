'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const http_status_1 = require('http-status');
const allowCors_1 = require('../../middlewares/allowCors');
const method_1 = require('../../middlewares/method');
const domains_1 = require('@3shop/domains');
const infra_1 = require('../../infra');
const addAccountIdToApp_1 = require('../../utils/addAccountIdToApp');
const JsonWebTokenClient_1 = require('../../infra/JsonWebTokenClient');
const utils_1 = require('../../utils');
const account = (0, domains_1.MoneyAccountService)((0, infra_1.StripeAccountCreator)());
const token = (0, domains_1.AuthorizationTokenService)(
  (0, JsonWebTokenClient_1.JsonWebTokenClient)(),
);
async function handler(req, res) {
  const authorizationToken = (0, utils_1.extractTokenFromAuthorization)(req.headers.authorization);
  const { accountId } = req.body;
  if (!authorizationToken) throw new Error('No Authorization Token');
  const appId = token.decodeAppId(authorizationToken);
  if (!appId) {
    throw new Error('Could not find x-hasura-user-id in JWT claims');
  }
  try {
    if (!accountId) {
      const newAccountId = await account.createAccount();
      await (0, addAccountIdToApp_1.addAccountIdToApp)(newAccountId, appId);
      const onboardingLink = await account.createOnboardingLink(newAccountId);
      return res.status(http_status_1.OK).send({ onboarding_link: onboardingLink });
    }
    const onboardingLink = await account.createOnboardingLink(accountId);
    return res.status(http_status_1.OK).send({ onboarding_link: onboardingLink });
  } catch (error) {
    console.error(error);
    return res.status(http_status_1.INTERNAL_SERVER_ERROR).json({ error });
  }
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('POST', handler));
