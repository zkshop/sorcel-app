import { EmailService } from '@3shop/domains';
import { SendEmailClient } from '@3shop/infra';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';

const emailService = EmailService(SendEmailClient());

type QueryParams = {
  firstname: string;
  lastname: string;
  email: string;
};

async function sendEmail(name: string, surname: string, email: string) {
  try {
    await emailService.sendEmail({ email, name, surname });
  } catch (error) {
    throw error;
  }
}

async function handler(req: VercelRequest, res: VercelResponse) {
  const { firstname: name, lastname: surname, email } = req.body as QueryParams;

  try {
    await sendEmail(name, surname, email);
  } catch (error) {
    return res.status(500).json({ error });
  }

  return res.send({
    message: `Email sent to ${name} ${surname}`,
  });
}

export default allowCors(method('POST', handler));
