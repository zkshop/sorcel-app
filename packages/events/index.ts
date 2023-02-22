import RudderAnalytics from '@rudderstack/rudder-sdk-node';
import { envVars } from '@3shop/config';

const RUDDERSTACK_URL = 'https://shopadrien.dataplane.rudderstack.com';

export const eventClient = new RudderAnalytics(envVars.SECRET_RUDDERSTACK || '', {
  dataPlaneUrl: RUDDERSTACK_URL,
});

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
  eventClient.track({ event: ORDER_CONFIRMATION, userId: email, properties: eventData });
};
