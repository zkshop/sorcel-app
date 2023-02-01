import type { VercelRequest, VercelResponse } from '@vercel/node';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { allowCors } from '../../middlewares/allowCors';
import { method } from '../../middlewares/method';
import { AuthorizationTokenService, MoneyAccountService } from '@3shop/domains';
import { StripeAccountCreator } from '../../infra';
import { addAccountIdToApp } from '../../utils/addAccountIdToApp';
import { JsonWebTokenClient } from '../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization } from '../../utils';

const account = MoneyAccountService(StripeAccountCreator());
const token = AuthorizationTokenService(JsonWebTokenClient());

async function handler(req: VercelRequest, res: VercelResponse) {
  const authorizationToken = extractTokenFromAuthorization(req.headers.authorization);

  if (!authorizationToken) throw new Error('No Authorization Token');

  const appId = token.decodeAppId(authorizationToken);

  if (!appId) {
    throw new Error('Could not find x-hasura-user-id in JWT claims');
  }

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
