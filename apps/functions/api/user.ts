import { VercelRequest, VercelResponse } from '@vercel/node';
export default (req: VercelRequest, res: VercelResponse): void => {
  res.json({ name: 'Johne', email: 'john@example.com' });
};
