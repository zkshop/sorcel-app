import { Box, Table, Button, Header, Spinner } from '@3shop/ui';
import { Link } from 'react-router-dom';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { useGetAdminAppQuery, useGetAdminProductsQuery } from '@3shop/apollo';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../routes/Routes';

const getEditProductIdRoute = (id: string) => `edit/${id}`;

export const Products = () => {
  const { data, error, loading } = useGetAdminProductsQuery();
  const { data: appData, error: appError, loading: appLoading } = useGetAdminAppQuery();
  const navigate = useNavigate();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  if (appLoading) return <Spinner />;

  if (appError || !appData) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Header title="Products">
        {appData.app[0].moneyAccountId ? (
          <Link to={`${ROUTES_PATH.PROTECTED.PRODUCT}/add`}>
            <Button>+ New Product</Button>
          </Link>
        ) : (
          <Link to={`${ROUTES_PATH.PROTECTED.PAYMENTS}`}>
            <Button>Connect to Stripe</Button>
          </Link>
        )}
      </Header>

      <Box mt={4}>
        <Table
          data={data.products}
          heads={PRODUCT_ATTRIBUTES}
          renderRow={({ id, image, name, price, type }) => (
            <ProductListItem
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              type={type}
              goToProduct={() => navigate(getEditProductIdRoute(id))}
            />
          )}
        />
      </Box>
    </Box>
  );
};
