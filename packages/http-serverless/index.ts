import axios from 'axios';

export const httpServerless = axios.create({
  baseURL: process.env.PUBLIC_FUNCTIONS_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.SERVERLESS_API_KEY,
  },
});
