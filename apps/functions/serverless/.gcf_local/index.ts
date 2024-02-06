import express from 'express';

import { createApp } from '../../create-app/src';
import { isGranted } from '../../is-granted/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { login } from '../../admin/auth/login/src';
import { verify } from '../../admin/auth/verify/src';
import { updatePlan } from '../../update-plan/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { paymentIntents } from '../../shop/payment-intents/src';


const app = express();
app.use('/create-app', createApp);
app.use('/is-granted', isGranted);
app.use('/get-stripe-account', getStripeAccount);
app.use('/connect-with-email', connectWithEmail);
app.use('/login', login);
app.use('/verify', verify);
app.use('/update-plan', updatePlan);
app.use('/get-paper-wallet', getPaperWallet);
app.use('/create-stripe-account', createStripeAccount);
app.use('/get-paper-token', getPaperToken);
app.use('/payment-intents', paymentIntents);

export { app as index, createApp, isGranted, getStripeAccount, connectWithEmail, login, verify, updatePlan, getPaperWallet, createStripeAccount, getPaperToken, paymentIntents };