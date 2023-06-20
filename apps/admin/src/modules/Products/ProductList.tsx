import { Box, Table, Button, Header, Spinner } from '@3shop/ui';
import { Link } from 'react-router-dom';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { useGetAdminProductsQuery } from '@3shop/apollo';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../../routes/Routes';

const getEditProductIdRoute = (id: string) => `edit/${id}`;

export const Products = () => {
  const { data, error, loading } = useGetAdminProductsQuery();
  const navigate = useNavigate();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Header title="Products">
        <Link to={`${ROUTES_PATH.PROTECTED.PRODUCT}/add`}>
          <Button>+ New Product</Button>
        </Link>
      </Header>

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
  );
};
