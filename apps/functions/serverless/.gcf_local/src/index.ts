import express from 'express';

import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { createLog } from '../../create-log/src';
import { createApp } from '../../create-app/src';
import { updatePlan } from '../../update-plan/src';
import { login } from '../../admin/auth/login/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { isGranted } from '../../is-granted/src';
import { verify } from '../../admin/auth/verify/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { id } from '../../shop/poap/events/[id]/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { signin } from '../../shop/xumm/signin/src';
import { address } from '../../shop/poap/[address]/src';
import { payload } from '../../shop/xumm/payload/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';


const app = express();
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/create-log', createLog);
app.use('/api/create-app', createApp);
app.use('/api/update-plan', updatePlan);
app.use('/api/admin/auth/login', login);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/is-granted', isGranted);
app.use('/api/admin/auth/verify', verify);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/xumm/signin', signin);
app.use('/api/shop/poap', address);
app.use('/api/shop/xumm/payload', payload);
app.use('/api/shop/get-paper-wallet', getPaperWallet);

export { app as index, getStripeAccount, createLog, createApp, updatePlan, login, createStripeAccount, isGranted, verify, connectWithEmail, getPaperToken, id, paymentIntents, signin, address, payload, getPaperWallet };