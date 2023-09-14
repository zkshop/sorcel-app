import { Route, createRoutesFromElements, createMemoryRouter } from 'react-router-dom';
import { Gallery } from '@/routes/Gallery';
import { Success } from '@/routes/Success';
import { Shipping } from '@/routes/Shipping';
import { Product } from '@/routes/Product';
import { Checkout } from '@/routes/Checkout';
import { Layout } from '@/components/Layout';

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Gallery />} />
      <Route path="/modal/:productId" element={<Gallery />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/shipping/:productId" element={<Shipping />} />
      <Route path="/checkout/:productId" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Route>,
  ),
);

export { router };
