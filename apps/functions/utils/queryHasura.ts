import axios from 'axios';

export async function queryHasura(query: { query: string }) {
  const res = await axios(process.env.PUBLIC_HASURA_API_URL || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',

      'x-hasura-admin-secret': process.env.SECRET_HASURA || '',
    },
    data: JSON.stringify(query),
  });

  return res.data;
}
