import { envVars } from '@3shop/config';
import axios from 'axios';

type Payload = {
  query: string;
  variables?: object;
};

// TODO: refacto to use new ApolloClient()
export async function queryHasura(payload: Payload) {
  const res = await axios(envVars.PUBLIC_HASURA_API_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': envVars.SECRET_HASURA,
    },
    data: JSON.stringify(payload),
  });

  return res.data;
}
