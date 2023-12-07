import express from 'express';

import { createApp } from '../../create-app/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { updatePlan } from '../../update-plan/src';
import { login } from '../../admin/auth/login/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { isGranted } from '../../is-granted/src';
import { verify } from '../../admin/auth/verify/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';


const app = express();
app.use('/api/create-app', createApp);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/shop/get-paper-wallet', getPaperWallet);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/update-plan', updatePlan);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/is-granted', isGranted);
app.use('/api/admin/auth/verify', verify);
app.use('/api/admin/create-stripe-account', createStripeAccount);

export { app as index, createApp, getStripeAccount, connectWithEmail, getPaperWallet, paymentIntents, updatePlan, login, getPaperToken, isGranted, verify, createStripeAccount };