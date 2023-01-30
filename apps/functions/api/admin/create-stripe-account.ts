import type { VercelRequest, VercelResponse } from '@vercel/node';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';
import { MoneyAccountService } from '@3shop/domains';
import { StripeAccountCreator } from '../../infra';
import { addAccountIdToApp } from '../../utils/addAccountIdToApp';

const account = MoneyAccountService(StripeAccountCreator());

async function handler(req: VercelRequest, res: VercelResponse) {
  const { appId } = req.body as { appId: string };

  try {
    const accountId = await account.createAccount();
    await addAccountIdToApp(accountId, appId);
    const onboardingLink = await account.createOnboardingLink(accountId);
    return res.status(OK).send({ onboarding_link: onboardingLink });
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export default allowCors(method('POST', handler));
