import { Route, Routes as OriginalRoutes } from 'react-router-dom';
import { ProtectedRoutes, General } from '../pages';
import { Login } from '../pages/Login';
import { GateRoutes } from './GateRoutes';
import { ProductRoutes } from './ProductRoutes';
import { PollRoutes } from './PollRoutes';
import { OrderList } from '../modules/Order/OrderList';
import { Integration } from '../modules/Integration/Integration';

const Routes = () => (
  <OriginalRoutes>
    <Route path="/" index element={<Login />} />
    <Route path="/app" element={<ProtectedRoutes />}>
      <Route index element={<General />} />
      <Route path="product/*" element={<ProductRoutes />} />
      <Route path="gate/*" element={<GateRoutes />} />
      <Route path="orders" element={<OrderList />} />
      <Route path="poll/*" element={<PollRoutes />} />
      <Route path="integrations" element={<Integration />} />
    </Route>
  </OriginalRoutes>
);

export default Routes;
