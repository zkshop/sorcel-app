import express from 'express';

import { updatePlan } from '../../update-plan/src';
import { createLog } from '../../create-log/src';
import { createApp } from '../../create-app/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { isGranted } from '../../is-granted/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { login } from '../../admin/auth/login/src';
import { verify } from '../../admin/auth/verify/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { id } from '../../shop/poap/events/[id]/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { address } from '../../shop/poap/[address]/src';
import { paymentIntents } from '../../shop/payment-intents/src';


const app = express();
app.use('/api/update-plan', updatePlan);
app.use('/api/create-log', createLog);
app.use('/api/create-app', createApp);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/is-granted', isGranted);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/admin/auth/login', login);
app.use('/api/admin/auth/verify', verify);
app.use('/api/shop/get-paper-wallet', getPaperWallet);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/poap', address);
app.use('/api/shop/payment-intents', paymentIntents);

export { app as index, updatePlan, createLog, createApp, getStripeAccount, isGranted, createStripeAccount, connectWithEmail, login, verify, getPaperWallet, id, getPaperToken, address, paymentIntents };