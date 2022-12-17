import type { VercelRequest, VercelResponse } from '@vercel/node';
import { magicSDK } from 'magic-server-sdk';
import jwt from 'jsonwebtoken';
import { INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status';
import { allowCors } from '../../../middlewares/allowCors';
import { queryHasura } from '../../../utils/queryHasura';
import { method } from '../../../middlewares/method';

async function handler(req: VercelRequest, res: VercelResponse) {
  if (!process.env.JWT_SECRET) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'No JWT Secret as env.' });
    return;
  }

  try {
    const didToken = req.headers.authorization?.substring(7);
    magicSDK.token.validate(didToken || '');
    const metadata = await magicSDK.users.getMetadataByToken(didToken || '');

    if (!metadata.email) {
      res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Server Error',
      });
      return;
    }

    const user = await getUser(metadata.email);

    if (!user) {
      res.status(UNAUTHORIZED).json({ message: 'Unauthorized' });
      return;
    }

    const token = jwt.sign(
      {
        ...metadata,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['customer'],
          'x-hasura-default-role': 'customer',
          'x-hasura-user-id': `${user.app_id}`,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      },
      process.env.JWT_SECRET,
    );

    res.status(200).send({ token });
    return;
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

async function getUser(email: string) {
  const query = {
    query: `
    {
      user_by_pk(email: "${email}") {
        app_id
        email
        id
        role
      }
    }`,
  };

  try {
    const data = await queryHasura(query);

    console.log(data);

    return data?.data?.user_by_pk;
  } catch (error) {}
}

export default allowCors(method('POST', handler));
