import { Request, Response } from 'express';
import { AuthTokenValidationService } from '../../../../../../packages/domains';
import { INTERNAL_SERVER_ERROR, OK } from 'http-status';
import { UserTokenValidationClient } from '../../../../infra/UserTokenValidationClient';
import { envMiddleWare, allowCors, withEnv } from '../../../middlewares';
import { HttpFunction } from '@google-cloud/functions-framework';

const tokenValidationService = withEnv(() => AuthTokenValidationService(UserTokenValidationClient()));

async function validateToken(token: string) {
  try {
    tokenValidationService.validate(token);
  } catch (error) {
    throw error;
  }
}

const handler: HttpFunction = async (req, res) => {
  try {
    const token = req.headers.authorization?.substring(7) || '';
    await validateToken(token);
    return res.status(OK).json({ authenticated: true });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ error });
  }
}

export const connectWithEmail = envMiddleWare(allowCors(handler));
