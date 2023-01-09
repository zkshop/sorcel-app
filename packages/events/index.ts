import RudderAnalytics from '@rudderstack/rudder-sdk-node';
import { envVars } from '@3shop/config';

const RUDDERSTACK_URL = 'https://shopadrien.dataplane.rudderstack.com';

export const eventClient = new RudderAnalytics(envVars.SECRET_RUDDERSTACK || '', {
  dataPlaneUrl: RUDDERSTACK_URL,
});
