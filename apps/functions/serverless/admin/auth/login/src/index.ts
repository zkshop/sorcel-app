import { Request, Response } from 'express';
import { magicSDK } from '../../../../../../../packages/magic-server-sdk';
import { INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from 'http-status';
import { AuthorizationTokenService } from '@3shop/domains';
import { JsonWebTokenClient } from '../../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization, getUser } from '../../../../../utils';
import { envVars } from '@3shop/config';

const Token = AuthorizationTokenService(JsonWebTokenClient());

export async function login(req: Request, res: Response) {
  if (!envVars.SECRET_JWT) return res.status(INTERNAL_SERVER_ERROR);

  const didToken = extractTokenFromAuthorization(req.headers.authorization);

  if (!didToken) return res.status(UNAUTHORIZED);

  try {
    magicSDK.token.validate(didToken);
    const metadata = await magicSDK.users.getMetadataByToken(didToken);

    if (!metadata.email) return res.status(INTERNAL_SERVER_ERROR);

    const user = await getUser(metadata.email);

    if (!user) return res.status(UNAUTHORIZED);

    const token = Token.sign(user.app_id, metadata);

    return res.status(OK).send({ token });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}