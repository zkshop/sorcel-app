import { envVars } from '@3shop/config';
import axios from 'axios';

export async function queryHasura(query: { query: string }) {
  const res = await axios(envVars.PUBLIC_HASURA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': envVars.SECRET_HASURA,
    },
    data: JSON.stringify(query),
  });

  return res.data;
}
