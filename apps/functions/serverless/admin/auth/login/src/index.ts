import { magicSDK } from '../../../../../../../packages/magic-server-sdk';
import { INTERNAL_SERVER_ERROR, OK, UNAUTHORIZED } from 'http-status';
import { AuthorizationTokenService } from '@3shop/domains';
import { JsonWebTokenClient } from '../../../../../infra/JsonWebTokenClient';
import { extractTokenFromAuthorization, getUser } from '../../../../../utils';
import type { HttpFunction } from '@google-cloud/functions-framework';
import { envMiddleWare, allowCors, withEnv } from '../../../../middlewares';

const Token = withEnv(() => AuthorizationTokenService(JsonWebTokenClient()));

const handler: HttpFunction = async (req, res) => {
  if (!process.env.SECRET_JWT) return res.status(INTERNAL_SERVER_ERROR);

  const didToken = extractTokenFromAuthorization(req.body.didToken);

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
};
export const login = envMiddleWare(allowCors(handler));
