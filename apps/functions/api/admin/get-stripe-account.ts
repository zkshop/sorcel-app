import { MoneyAccountService } from '@3shop/domains';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { StripeAccountCreator } from '../../infra';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';

const account = MoneyAccountService(StripeAccountCreator());

async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { accountId } = req.query as { accountId: string };

    const retrievedAccount = await account.getAccount(accountId);

    return res.status(OK).send({ account: retrievedAccount });
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ error: error });
  }
}

export default allowCors(method('GET', handler));
