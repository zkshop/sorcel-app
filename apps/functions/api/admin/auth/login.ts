import type { VercelRequest, VercelResponse } from '@vercel/node';
import { magicSDK } from 'magic-server-sdk';
import jwt from 'jsonwebtoken';
import { INTERNAL_SERVER_ERROR, METHOD_NOT_ALLOWED, UNAUTHORIZED } from 'http-status';
import type { Nullable } from 'types';
import axios from 'axios';
import { allowCors } from '../../../middlewares/allowCors';
import { queryHasura } from '../../../utils/queryHasura';

async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(METHOD_NOT_ALLOWED).json({ message: 'Method Not Allowed' });
    return;
  }

  if (!process.env.JWT_SECRET) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: 'No JWT Secret as env.' });
    return;
  }

  try {
    const didToken = req.headers.authorization?.substring(7);
    magicSDK.token.validate(didToken || '');
    const metadata = await magicSDK.users.getMetadataByToken(didToken || '');

    const token = jwt.sign(
      {
        ...metadata,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['customer'],
          'x-hasura-default-role': 'customer',
          'x-hasura-customer-id': `${metadata.issuer}`,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      },
      process.env.JWT_SECRET,
    );

    const newUser = await isNewCustomer(token, metadata.email);

    if (newUser) {
      res.status(UNAUTHORIZED).json({ message: 'Unauthorized' });
      return;
    }

    res.status(200).send({ token });
    return;
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

async function isNewCustomer(token: string, email: Nullable<string>) {
  if (!email) return false;

  const query = {
    query: `
    {
      customer_by_pk(email: "${email}") {
        publicAddress
        issuer
        email
        app_id
      }
    }`,
  };

  try {
    const data = await queryHasura(query, token);

    return data?.data?.customer_by_pk.email ? false : true;
  } catch (error) {}
}

export default allowCors(handler);
