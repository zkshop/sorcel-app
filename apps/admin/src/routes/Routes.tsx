import { Route, Routes as OriginalRoutes } from 'react-router-dom';
import { ProtectedRoutes, Home, General } from '../pages';
import { Login } from '../pages/Login';
import { ProductRoutes } from './ProductRoutes';

const Routes = () => (
  <OriginalRoutes>
    <Route path="/" index element={<Login />} />
    <Route path="/app" element={<ProtectedRoutes />}>
      <Route index element={<Home />} />
      <Route path="general" element={<General />} />

      <Route path="product/*" element={<ProductRoutes />} />
    </Route>
  </OriginalRoutes>
);

export default Routes;
