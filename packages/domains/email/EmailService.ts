import type { EmailClient, EmailData } from './EmailClient';

type EmailServiceType = {
  sendEmail(email: EmailData): Promise<void>;
};

export function EmailService(client: EmailClient): EmailServiceType {
  return {
    sendEmail: async (email) => {
      client.sendEmail(email);
    },
  };
}
