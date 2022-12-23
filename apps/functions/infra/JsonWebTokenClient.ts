import type { AuthorizationTokenClient } from '@3shop/domains';
import jwt from 'jsonwebtoken';

const createJsonWebTokenPayload = (appId: string, metadata: object) => ({
  ...metadata,
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': ['customer'],
    'x-hasura-default-role': 'customer',
    'x-hasura-user-id': `${appId}`,
  },
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
});

export function JsonWebTokenClient(): AuthorizationTokenClient {
  const secret = process.env.SECRET_JWT || '';

  return {
    sign: (appId, metadata) => jwt.sign(createJsonWebTokenPayload(appId, metadata), secret),
    verify: (token) => {
      try {
        jwt.verify(token, secret);

        return token;
      } catch (e) {
        throw new Error('Invalid JWT env');
      }
    },
  };
}
