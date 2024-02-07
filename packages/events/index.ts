import * as analytics from 'rudder-sdk-js';


const RUDDERSTACK_URL = 'https://shopadrien.dataplane.rudderstack.com';

analytics.load(process.env.SECRET_RUDDERSTACK || '', RUDDERSTACK_URL);

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
  analytics.track(ORDER_CONFIRMATION, { ...eventData, email });
};
