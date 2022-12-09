import { Route, Routes } from 'react-router-dom';
import { AddProduct, EditProduct } from '../pages';

export const ProductRoutes = () => (
  <Routes>
    <Route path="/">
      <Route path="edit/:productId" element={<EditProduct />} />
      <Route path="add" element={<AddProduct />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
