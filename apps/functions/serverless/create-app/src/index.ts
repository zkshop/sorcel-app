console.log("-------------- file 1");
import { withEnv } from 'env-loader';

import { Request, Response } from 'express';
import { AppCreatorService } from '../../../../../packages/domains';
import { SorcelAppCreator } from '../../../infra/SorcelAppCreator';
// envEmitter.emit('updateEnv', process.env);


type CreateAppParams = {
  name: string;
  email: string;
};
const appCreator = withEnv(() => AppCreatorService(SorcelAppCreator()));

export async function createApp(req: any, res: any) {
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
