import { envVars } from '@3shop/config';
import axios from 'axios';
import { withEnv } from '../serverless/middlewares';

type QueryPayload = {
  query: string;
  variables?: object;
};

export async function query(payload: QueryPayload) {
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

export async function mutate<T extends object>(payload: QueryPayload): Promise<T> {
  console.log("called ++++++++++", envVars);
  const res = await axios(envVars.PUBLIC_HASURA_API_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': envVars.SECRET_HASURA,
    },
    data: JSON.stringify(payload),
  });

  console.log('url', envVars.PUBLIC_HASURA_API_URL);
  console.log('response', { errors: res.data.errors });

  return res.data;
}

export default {
  mutate,
  query,
};
