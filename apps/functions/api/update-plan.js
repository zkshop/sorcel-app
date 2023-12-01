'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const allowCors_1 = require('../middlewares/allowCors');
const method_1 = require('../middlewares/method');
const updatePlan_1 = require('../utils/updatePlan');
async function handler(req, res) {
  const event = req.body;
  if (event.type === 'checkout.session.completed') {
    const appId = event.data.object.client_reference_id;
    await (0, updatePlan_1.updatePlan)(appId, 'PRO');
    console.log(`Plan updated for app ${appId}`);
    return res.status(200).json({ message: `Plan updated for app ${appId}` });
  }
  return res.status(400).send(`Webhook Error: Unhandled event type ${event.type}`);
}
exports.default = (0, allowCors_1.allowCors)((0, method_1.method)('POST', handler));
