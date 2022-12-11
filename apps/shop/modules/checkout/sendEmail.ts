import axios from 'axios';

export const sendEmail = async (firstname: string, lastname: string, email: string) =>
  await axios.post('/api/email', {
    firstname,
    lastname,
    email,
  });
