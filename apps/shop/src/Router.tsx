import {
  Route,
  createRoutesFromElements,
  createMemoryRouter,
  useRouteError,
} from 'react-router-dom';
import { Galery } from '@/routes/Galery';
import { Success } from '@/routes/Success';
import { Shipping } from '@/routes/Shipping';
import { Product } from '@/routes/Product';
import { Checkout } from '@/routes/Checkout';
import { Layout } from '@/components/Layout';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      Oops, something went wrong! We&apos;re sorry, but an unexpected error has occurred on our
      website. Our team has been notified and is working to resolve the issue as quickly as
      possible. Please try again later, or contact our support team if the problem persists. Thank
      you for your understanding and patience.
    </div>
  );
}

const router = createMemoryRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route errorElement={<ErrorBoundary />}>
        <Route index element={<Galery />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/shipping/:productId" element={<Shipping />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Route>,
  ),
);

export { router };
