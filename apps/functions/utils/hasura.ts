import axios from 'axios';

type QueryPayload = {
  query: string;
  variables?: object;
};

export interface HasuraError {
  message: string;
  extensions: Record<string, any>;
}

export interface HasuraResponse<T> {
  data?: T;
  errors?: HasuraError[];
}

export async function query(payload: QueryPayload) {
  const res = await axios(process.env.PUBLIC_HASURA_API_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': process.env.SECRET_HASURA,
    },
    data: JSON.stringify(payload),
  });

  return res.data;
}

export async function mutate<T extends object>(payload: QueryPayload): Promise<T> {
  const res = await axios(process.env.PUBLIC_HASURA_API_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': process.env.SECRET_HASURA,
    },
    data: JSON.stringify(payload),
  });

  console.log('response', { errors: res.data.errors });

  return res.data;
}

export default {
  mutate,
  query,
};
