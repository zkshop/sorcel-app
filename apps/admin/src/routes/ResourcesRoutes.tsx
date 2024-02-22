import { Route, Routes } from 'react-router-dom';
import { ProductTutorial } from '../modules/Resources';

export const ResourcesRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<div />} />
      <Route path="product-tutorial" element={<ProductTutorial />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
