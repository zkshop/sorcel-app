import { MoneyAccountService } from '../../../../../../packages/domains';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { StripeAccountCreator } from '../../../../infra';
import { envMiddleWare, allowCors, withEnv } from '../../../middlewares';
import type { HttpFunction } from '@google-cloud/functions-framework';

const account = withEnv(() => MoneyAccountService(StripeAccountCreator()));

const handler: HttpFunction = async (req, res) => {
  const { accountId } = req.query as { accountId: string };

  try {
    const retrievedAccount = await account.getAccount(accountId);

    return res.status(OK).send({ account: retrievedAccount });
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ error: error });
  }
};

export const getStripeAccount = envMiddleWare(allowCors(handler));
