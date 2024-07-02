import express from 'express';

import { isGranted } from '../../is-granted/src';
import { createApp } from '../../create-app/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { createLog } from '../../create-log/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { updatePlan } from '../../update-plan/src';
import { login } from '../../admin/auth/login/src';
import { signin } from '../../shop/xaman/signin/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { id } from '../../shop/poap/events/[id]/src';
import { payload } from '../../shop/xaman/payload/src';
import { address } from '../../shop/poap/[address]/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { verify } from '../../admin/auth/verify/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';


const app = express();
app.use('/api/is-granted', isGranted);
app.use('/api/create-app', createApp);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/create-log', createLog);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/update-plan', updatePlan);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/xaman/signin', signin);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/xaman/payload', payload);
app.use('/api/shop/poap', address);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/admin/auth/verify', verify);
app.use('/api/shop/get-paper-wallet', getPaperWallet);

export { app as index, isGranted, createApp, getStripeAccount, createLog, connectWithEmail, updatePlan, login, signin, getPaperToken, id, payload, address, paymentIntents, createStripeAccount, verify, getPaperWallet };