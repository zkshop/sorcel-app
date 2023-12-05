import { updatePlan as utilUpdatePlan } from '../../../utils/updatePlan';

export async function updatePlan(req: any, res: any) {
    const event = req.body;

  if (event.type === 'checkout.session.completed') {
    const appId = event.data.object.client_reference_id as string;

    await utilUpdatePlan(appId, 'PRO');
    console.log(`Plan updated for app ${appId}`);

    return res.status(200).json({ message: `Plan updated for app ${appId}` });
  }

  return res.status(400).send(`Webhook Error: Unhandled event type ${event.type}`);
}
