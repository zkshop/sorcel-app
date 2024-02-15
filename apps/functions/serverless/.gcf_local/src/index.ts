import express from 'express';

import { createApp } from '../../create-app/src';
import { isGranted } from '../../is-granted/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
<<<<<<< HEAD
import { login } from '../../admin/auth/login/src';
import { address } from '../../shop/poap/[address]/src';
import { verify } from '../../admin/auth/verify/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { address } from '../../shop/poap/[address]/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { login } from '../../admin/auth/login/src';
=======
import { updatePlan } from '../../update-plan/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { login } from '../../admin/auth/login/src';
import { id } from '../../shop/poap/events/[id]/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { address } from '../../shop/poap/[address]/src';
>>>>>>> b1176ab1 (feat(paywall): :sparkles: setup create log function to call it from paywall)
import { verify } from '../../admin/auth/verify/src';


const app = express();
app.use('/api/create-app', createApp);
<<<<<<< HEAD
<<<<<<< HEAD
=======
app.use('/api/is-granted', isGranted);
>>>>>>> eed41a70 (Fix email sent when not signed up)
app.use('/api/update-plan', updatePlan);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/is-granted', isGranted);
app.use('/api/shop/connect-with-email', connectWithEmail);
<<<<<<< HEAD
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/poap/events', id);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/poap', address);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/poap', address);
app.use('/api/admin/auth/verify', verify);
=======
app.use('/api/shop/poap/events', id);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/shop/payment-intents', paymentIntents);
>>>>>>> eed41a70 (Fix email sent when not signed up)
app.use('/api/shop/get-paper-wallet', getPaperWallet);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/shop/poap', address);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/admin/auth/login', login);
app.use('/api/admin/auth/verify', verify);

<<<<<<< HEAD
export { app as index, getStripeAccount, updatePlan, createApp, connectWithEmail, createStripeAccount, getPaperWallet, login, getPaperToken, verify, paymentIntents, id, isGranted, address };
=======
export { app as index, createApp, isGranted, updatePlan, connectWithEmail, id, getStripeAccount, paymentIntents, getPaperWallet, createStripeAccount, address, getPaperToken, login, verify };
>>>>>>> eed41a70 (Fix email sent when not signed up)
=======
app.use('/api/is-granted', isGranted);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/update-plan', updatePlan);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/get-paper-wallet', getPaperWallet);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/poap', address);
app.use('/api/admin/auth/verify', verify);

export { app as index, createApp, isGranted, connectWithEmail, getStripeAccount, createStripeAccount, updatePlan, paymentIntents, getPaperWallet, login, id, getPaperToken, address, verify };
>>>>>>> b1176ab1 (feat(paywall): :sparkles: setup create log function to call it from paywall)
