import { Route, Routes as OriginalRoutes } from 'react-router-dom';
import { ProtectedRoutes, Settings } from '../pages';
import { Login } from '../pages/Login';
import { GateRoutes } from './GateRoutes';
import { ProductRoutes } from './ProductRoutes';
import { PollRoutes } from './PollRoutes';
import { OrderList } from '../modules/Order/OrderList';
import { Payments } from '../modules/Payments/Payments';
import { Customization } from '../pages/Customization';
import { Integrations } from '../pages/Integrations';
import { Plan } from '../pages/Plan';
import { Signup } from '../pages/Signup';
import { Redirect } from '../pages/Redirect';
import { Oauthredirect } from '../pages/OAuthRedirect';

export const ROUTES_PATH = {
  PUBLIC: {
    LOGIN: '/',
  },
  PROTECTED: {
    SETTINGS: '/app/settings',
    CUSTOMIZATION: '/app/customization',
    PRODUCT: '/app/product',
    GATE: '/app/gate',
    ORDERS: '/app/orders',
    POLL: '/app/poll',
    PAYMENTS: '/app/payments',
    INTEGRATIONS: '/app',
  },
} as const;

const Routes = () => (
  <OriginalRoutes>
    <Route path="/" index element={<Login />} />
    <Route path="/redirect" index element={<Redirect />} />
    <Route path="/oauth/callback" index element={<Oauthredirect/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/app" element={<ProtectedRoutes />}>
      <Route index element={<Integrations />} />
      <Route path="settings" element={<Settings />} />
      <Route path="customization" element={<Customization />} />
      <Route path="product/*" element={<ProductRoutes />} />
      <Route path="gate/*" element={<GateRoutes />} />
      <Route path="orders" element={<OrderList />} />
      <Route path="poll/*" element={<PollRoutes />} />
      <Route path="payments" element={<Payments />} />
      <Route path="plan" element={<Plan />} />
    </Route>
  </OriginalRoutes>
);

export default Routes;
