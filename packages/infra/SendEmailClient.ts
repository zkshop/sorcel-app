import type { EmailClient } from '../domains';
import { SendinBlueClient } from '@3shop/sendinblue';
import { envVars } from '@3shop/config';

export function SendEmailClient(): EmailClient {
  return {
    sendEmail: async (email) => {
      if (!envVars.EMAIL_ORDER_TARGET) throw new Error('No order target specified.');

      SendinBlueClient.sendTransacEmail({
        templateId: 1,
        to: [
          {
            email: email.email,
            name: `${email.name} ${email.surname}`,
          },
        ],
        cc: [{ email: envVars.EMAIL_ORDER_TARGET }],
        params: {
          NOM: email.name,
        },
      });
    },
  };
}
