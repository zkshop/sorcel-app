import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../middlewares/allowCors';
import { method } from '../middlewares/method';
import { updatePlan } from '../utils/updatePlan';

async function handler(req: VercelRequest, res: VercelResponse) {
  const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const appId = event.data.object.client_reference_id as string;

    await updatePlan(appId, 'PRO');
    console.log(`Plan updated for app ${appId}`);

    return res.status(200).json({ message: `Plan updated for app ${appId}` });
  }

  return res.status(400).send(`Webhook Error: Unhandled event type ${event.type}`);
}

export default allowCors(method('POST', handler));
