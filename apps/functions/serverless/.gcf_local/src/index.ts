import express from 'express';

import { createApp } from '../../create-app/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { isGranted } from '../../is-granted/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { login } from '../../admin/auth/login/src';
import { verify } from '../../admin/auth/verify/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { signin } from '../../shop/xaman/signin/src';
import { payment } from '../../shop/xaman/payment/src';
import { createLog } from '../../create-log/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { payload } from '../../shop/xaman/payload/src';
import { updatePlan } from '../../update-plan/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { id } from '../../shop/poap/events/[id]/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { address } from '../../shop/poap/[address]/src';


const app = express();
app.use('/api/create-app', createApp);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/is-granted', isGranted);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/admin/auth/login', login);
app.use('/api/admin/auth/verify', verify);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/xaman/signin', signin);
app.use('/api/shop/xaman/payment', payment);
app.use('/api/create-log', createLog);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/shop/xaman/payload', payload);
app.use('/api/update-plan', updatePlan);
app.use('/api/shop/get-paper-wallet', getPaperWallet);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/poap', address);

export { app as index, createApp, getStripeAccount, isGranted, createStripeAccount, login, verify, paymentIntents, signin, payment, createLog, connectWithEmail, payload, updatePlan, getPaperWallet, id, getPaperToken, address };