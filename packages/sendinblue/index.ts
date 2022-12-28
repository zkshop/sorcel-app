import { envVars } from '@3shop/config';
import * as SibApi from 'sib-api-v3-typescript';

const SendinBlueClient = new SibApi.TransactionalEmailsApi();

SendinBlueClient.setApiKey(
  SibApi.TransactionalEmailsApiApiKeys.apiKey,
  envVars.SECRET_SENDINBLUE || '',
);

export { SendinBlueClient };
