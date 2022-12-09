import axios from 'axios';

export const sendEmail = async (firstname: string, lastname: string, email: string) => {
  console.log('hello');
  return await axios.post('/api/email', {
    firstname,
    lastname,
    email,
  });
};
