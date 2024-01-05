import { envVars } from '@3shop/config';
// @ts-ignore
import * as SibApiV3Sdk from 'sib-api-v3-sdk';

type Params = {
  shop_logo_url: string;
  name: string;
  product_name: string;
  shop_name: string;
  price: number;
  img_url: string;
};

const ORDER_CONFIRMATION_TEMPLATE_ID = 2;
const defaultEmails = [{ email: 'sinane@sorcel.co' }, { email: 'adrien@sorcel.co' }];

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];

apiKey.apiKey = envVars.SECRET_BREVO;

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendOrderConfirmation = async (email: string, params: Params) => {
  console.log('Sending order confirmation email to', email);
  sendSmtpEmail.templateId = ORDER_CONFIRMATION_TEMPLATE_ID;

  sendSmtpEmail.to = [{ email }, ...defaultEmails];
  sendSmtpEmail.params = params;

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    console.error(error);
  }
};
