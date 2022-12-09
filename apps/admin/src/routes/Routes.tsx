import { Route, Routes as OriginalRoutes } from 'react-router-dom';
import { PageLayout, Home, General } from '../pages';
import { ProductRoutes } from './ProductRoutes';

const Routes = () => (
  <OriginalRoutes>
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="general" element={<General />} />

      <Route path="product/*" element={<ProductRoutes />} />
    </Route>
  </OriginalRoutes>
);

export default Routes;
