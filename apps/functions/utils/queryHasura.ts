import axios from 'axios';

export async function queryHasura(query: { query: string }) {
  const res = await axios(process.env.SECRET_HASURA || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': process.env.PUBLIC_HASURA_API_URL || '',
    },
    data: JSON.stringify(query),
  });

  return res.data;
}
