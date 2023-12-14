import { envMiddleWare, withEnv } from '../../middlewares/withEnv';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { AppCreatorService } from '../../../../../packages/domains';
import { SorcelAppCreator } from '../../../infra/SorcelAppCreator';
import { allowCors } from '../../middlewares/allowCors';
import { envVars } from '@3shop/config';

type CreateAppParams = {
  name: string;
  email: string;
};
const appCreator = withEnv(() => AppCreatorService(SorcelAppCreator()));

const handler: HttpFunction = async (req, res) => {
  console.log(envVars.PUBLIC_HASURA_API_URL);
  console.log(envVars.SECRET_HASURA);
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
};

export const createApp = envMiddleWare(allowCors(handler));
