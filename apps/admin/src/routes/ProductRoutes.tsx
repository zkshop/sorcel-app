import { Route, Routes } from 'react-router-dom';
import { AddProduct, EditProduct } from '../pages';
import { Products } from '../modules/Products';

export const ProductRoutes = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Products />} />
      <Route path="edit/:productId" element={<EditProduct />} />
      <Route path="add" element={<AddProduct />} />
      <Route path="*" element={<>Not Found Page</>} />
    </Route>
  </Routes>
);
