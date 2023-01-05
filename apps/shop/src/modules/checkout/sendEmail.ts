import { envVars } from '@3shop/config';
import axios from 'axios';

export const sendEmail = async (firstname: string, lastname: string, email: string) => {
  const url = `${envVars.PUBLIC_FUNCTIONS_URL}/api/shop/send-email`;
  return await axios.post(url, {
    firstname,
    lastname,
    email,
  });
};
