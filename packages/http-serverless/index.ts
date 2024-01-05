import { envVars } from '@3shop/config';
import axios from 'axios';

export const httpServerless = axios.create({
  baseURL: envVars.PUBLIC_FUNCTIONS_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${envVars.SERVERLESS_API_KEY}`,
  },
});
