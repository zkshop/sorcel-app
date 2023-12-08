import { Request, Response } from 'express';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { AuthorizationTokenService, MoneyAccountService } from '../../../../../../packages/domains';
import { StripeAccountCreator } from '../../../../infra';
import { addAccountIdToApp } from '../../../../utils/addAccountIdToApp';
import { JsonWebTokenClient } from '../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization } from '../../../../utils';
import { envMiddleWare, allowCors, withEnv } from '../../../middlewares';
import { HttpFunction } from '@google-cloud/functions-framework';

const [account, token] = withEnv(() => [MoneyAccountService(StripeAccountCreator()), AuthorizationTokenService(JsonWebTokenClient())]);

const handler: HttpFunction = async (req, res) => {
  const authorizationToken = extractTokenFromAuthorization(req.headers.authorization);
  const { accountId } = req.body as { accountId?: string };

  if (!authorizationToken) throw new Error('No Authorization Token');

  const appId = token.decodeAppId(authorizationToken);

  if (!appId) {
    throw new Error('Could not find x-hasura-user-id in JWT claims');
  }

  try {
    if (!accountId) {
      const newAccountId = await account.createAccount();
      await addAccountIdToApp(newAccountId, appId);

      const onboardingLink = await account.createOnboardingLink(newAccountId);
      return res.status(OK).send({ onboarding_link: onboardingLink });
    }

    const onboardingLink = await account.createOnboardingLink(accountId);
    return res.status(OK).send({ onboarding_link: onboardingLink });
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export const createStripeAccount = envMiddleWare(allowCors(handler));

