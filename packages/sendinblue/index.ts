import * as SibApi from 'sib-api-v3-typescript';

const SendinBlueClient = new SibApi.TransactionalEmailsApi();

SendinBlueClient.setApiKey(
  SibApi.TransactionalEmailsApiApiKeys.apiKey,
  process.env.SECRET_SENDINBLUE || '',
);

export { SendinBlueClient };
