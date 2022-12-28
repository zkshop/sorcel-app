import { envVars } from '@3shop/config';
import axios from 'axios';

export const POAP_BASE_URL = 'https://api.poap.tech';

export const poap = axios.create({
  baseURL: POAP_BASE_URL,
  headers: {
    'X-API-Key': envVars.SECRET_POAP,
  },
});
