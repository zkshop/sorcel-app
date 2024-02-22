import { Route, Routes } from 'react-router-dom';
import { IntegrationTutorial, ProductTutorial } from '../modules/Resources';

export const ResourcesRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<div />} />
      <Route path="product-tutorial" element={<ProductTutorial />} />
      <Route path="integration-tutorial" element={<IntegrationTutorial />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
