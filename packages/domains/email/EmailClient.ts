export type EmailData = {
  name: string;
  surname: string;
  email: string;
};

export type EmailClient = {
  sendEmail(email: EmailData): Promise<void>;
};
