import express from 'express';

import { createApp } from '../../create-app/src';
<<<<<<< HEAD
=======
import { isGranted } from '../../is-granted/src';
<<<<<<< HEAD
import { connectWithEmail } from '../../shop/connect-with-email/src';
>>>>>>> db4b49f2 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { isGranted } from '../../is-granted/src';
import { createLog } from '../../create-log/src';
import { login } from '../../admin/auth/login/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { verify } from '../../admin/auth/verify/src';
import { updatePlan } from '../../update-plan/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { address } from '../../shop/poap/[address]/src';
<<<<<<< HEAD
import { id } from '../../shop/poap/events/[id]/src';
=======
>>>>>>> b1176ab1 (feat(paywall): :sparkles: setup create log function to call it from paywall)
=======
import { getStripeAccount } from '../../admin/get-stripe-account/src';
import { updatePlan } from '../../update-plan/src';
import { connectWithEmail } from '../../shop/connect-with-email/src';
import { id } from '../../shop/poap/events/[id]/src';
import { getPaperToken } from '../../shop/get-paper-token/src';
import { createStripeAccount } from '../../admin/create-stripe-account/src';
import { login } from '../../admin/auth/login/src';
import { address } from '../../shop/poap/[address]/src';
>>>>>>> 40b1b512 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
import { verify } from '../../admin/auth/verify/src';
import { paymentIntents } from '../../shop/payment-intents/src';
import { getPaperWallet } from '../../shop/get-paper-wallet/src';
>>>>>>> db4b49f2 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)


const app = express();
app.use('/api/create-app', createApp);
<<<<<<< HEAD
app.use('/api/admin/get-stripe-account', getStripeAccount);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> db4b49f2 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
app.use('/api/is-granted', isGranted);
app.use('/api/create-log', createLog);
app.use('/api/admin/auth/login', login);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/admin/auth/verify', verify);
app.use('/api/update-plan', updatePlan);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/shop/get-paper-wallet', getPaperWallet);
<<<<<<< HEAD
=======
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/shop/poap', address);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/admin/auth/login', login);
=======
app.use('/api/is-granted', isGranted);
app.use('/api/admin/get-stripe-account', getStripeAccount);
app.use('/api/update-plan', updatePlan);
app.use('/api/shop/connect-with-email', connectWithEmail);
app.use('/api/shop/poap/events', id);
app.use('/api/shop/get-paper-token', getPaperToken);
app.use('/api/admin/create-stripe-account', createStripeAccount);
app.use('/api/admin/auth/login', login);
app.use('/api/shop/poap', address);
>>>>>>> 40b1b512 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
app.use('/api/admin/auth/verify', verify);
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/get-paper-wallet', getPaperWallet);

<<<<<<< HEAD
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
>>>>>>> db4b49f2 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
app.use('/api/shop/payment-intents', paymentIntents);
app.use('/api/shop/poap', address);
app.use('/api/shop/poap/events', id);

<<<<<<< HEAD
export { app as index, createApp, getStripeAccount, isGranted, createLog, login, createStripeAccount, verify, updatePlan, connectWithEmail, getPaperToken, getPaperWallet, paymentIntents, address, id };
=======
export { app as index, createApp, isGranted, connectWithEmail, getStripeAccount, createStripeAccount, updatePlan, paymentIntents, getPaperWallet, login, id, getPaperToken, address, verify };
>>>>>>> b1176ab1 (feat(paywall): :sparkles: setup create log function to call it from paywall)
=======
export { app as index, createApp, isGranted, getStripeAccount, updatePlan, connectWithEmail, id, getPaperToken, createStripeAccount, login, address, verify, paymentIntents, getPaperWallet };
>>>>>>> 40b1b512 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
>>>>>>> db4b49f2 (Draft: [GraphQL error]: Malformed Authorization header, draft to check on dev)
