import * as analytics from 'rudder-sdk-js';

import { envVars } from '@3shop/config';

const RUDDERSTACK_URL = 'https://shopadrien.dataplane.rudderstack.com';

analytics.load(envVars.SECRET_RUDDERSTACK || '', RUDDERSTACK_URL);

export const eventClient = analytics;

export const ORDER_CONFIRMATION = 'Order Confirmation';

type OrderConfirmationEventData = {
  shop_logo_url: string;
  name: string;
  product_name: string;
  shop_name: string;
  price: number;
  img_url: string;
};

export const sendOrderConfirmation = (email: string, eventData: OrderConfirmationEventData) => {
  analytics.identify(email, { email });
  analytics.track(ORDER_CONFIRMATION, { properties: { ...eventData } });
};
