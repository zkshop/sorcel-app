import { EmailService } from '@3shop/domains';
import { SendEmailClient } from '@3shop/infra';
import type { NextApiRequest, NextApiResponse } from 'next';

const Email = EmailService(SendEmailClient());

type QueryParams = {
  firstname: string;
  lastname: string;
  email: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstname: name, lastname: surname, email } = req.body as QueryParams;

  try {
    await Email.sendEmail({
      email,
      name,
      surname,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }

  return res.send({
    message: `Email sent to ${name} ${surname}`,
  });
}
