import { AppCreatorService } from '@3shop/domains';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { SorcelAppCreator } from '../infra/SorcelAppCreator';
import { allowCors } from '../middlewares/allowCors';
import { method } from '../middlewares/method';

type CreateAppParams = {
  name: string;
  email: string;
};

const appCreator = AppCreatorService(SorcelAppCreator());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { name, email } = req.body as CreateAppParams;

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

export default allowCors(method('POST', handler));
