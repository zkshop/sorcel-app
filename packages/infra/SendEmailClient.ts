import type { EmailClient } from '../domains';
import { SendinBlueClient } from 'sendinblue';

export function SendEmailClient(): EmailClient {
  return {
    sendEmail: async (email) => {
      if (!process.env.EMAIL_ORDER_TARGET) throw new Error('No order target specified.');

      SendinBlueClient.sendTransacEmail({
        templateId: 1,
        to: [
          {
            email: email.email,
            name: `${email.name} ${email.surname}`,
          },
        ],
        cc: [{ email: process.env.EMAIL_ORDER_TARGET }],
        params: {
          NOM: email.name,
        },
      });
    },
  };
}
