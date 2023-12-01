'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const domains_1 = require('@3shop/domains');
const SorcelAppCreator_1 = require('../infra/SorcelAppCreator');
const allowCors_1 = require('../middlewares/allowCors');
const method_1 = require('../middlewares/method');
const appCreator = (0, domains_1.AppCreatorService)((0, SorcelAppCreator_1.SorcelAppCreator)());
async function handler(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Missing name or email');
  }
  const appData = await appCreator.createApp(name);
  if (!appData) {
    console.log(appData);
    return res.status(500).send('Error creating app');
  }
  const userData = await appCreator.createAdmin(email, appData.id);
  if (!userData) {
    return res.status(500).send('Error creating user');
  }
  return res.status(200).send({ appId: appData.id, name: appData.name, email: userData.email });
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('POST', handler));
