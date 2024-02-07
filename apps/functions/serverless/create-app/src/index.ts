import { envMiddleWare, withEnv } from '../../middlewares/withEnv';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { AppCreatorService } from '../../../../../packages/domains';
import { SorcelAppCreator } from '../../../infra/SorcelAppCreator';
import { allowCors } from '../../middlewares/allowCors';

type CreateAppParams = {
  name: string;
  email: string;
};
const appCreator = withEnv(() => AppCreatorService(SorcelAppCreator()));

import { AppConflict, AppNoData } from '../../../utils/createAppExceptions';

const handler: HttpFunction = async (req, res) => {
  const { name, email } = req.body as CreateAppParams;
  try {
    if (!name || !email) {
      return res.status(400).send('Missing name or email');
    }

    const appData = await appCreator.createApp(name);

    if (!appData) {
      return res.status(500).send('Error creating app');
    }

    const userData = await appCreator.createAdmin(email, appData.id);

    if (!userData) {
      return res.status(500).send('Error creating user');
    }
    return res.status(200).send({ appId: appData.id, name: appData.name, email: userData.email });
  } catch (e) {
    if (e instanceof AppConflict) return res.status(409).send(e.message);
    else if (e instanceof AppNoData) return res.status(500).send(e.message);
    return res.status(500).send('Unknown error');
  }
};

export const createApp = envMiddleWare(allowCors(handler));
