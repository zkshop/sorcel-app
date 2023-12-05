import { Request, Response } from 'express';
import { MoneyAccountService } from '../../../../../../packages/domains';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { StripeAccountCreator } from '../../../../infra';

const account = MoneyAccountService(StripeAccountCreator());

export async function getStripeAccount(req: Request, res: Response) {
  const { accountId } = req.query as { accountId: string };

  try {
    const retrievedAccount = await account.getAccount(accountId);

    return res.status(OK).send({ account: retrievedAccount });
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ error: error });
  }
}

