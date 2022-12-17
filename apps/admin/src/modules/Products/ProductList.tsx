import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Link,
  Button,
  Header,
  Spinner,
} from 'ui';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { useGetAdminProductsQuery } from 'apollo';
import { useNavigate } from 'react-router-dom';

const getEditProductIdRoute = (id: string) => `product/edit/${id}`;

const boxStyle = {
  bg: 'white',
  borderRadius: 'lg',
  p: 8,
  border: '1px solid lightgrey',
};

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
        <Link href="/app/product/add">
          <Button>+ New Product</Button>
        </Link>
      </Header>

      <Box my={4} sx={boxStyle}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {PRODUCT_ATTRIBUTES.map((title, index) => (
                  <Th key={`product-list-${index}`}>{title}</Th>
                ))}
              </Tr>
            </Thead>

            <Tbody>
              {data.products.map(({ id, image, name, price, discount, collection, curation }) => (
                <ProductListItem
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  price={price}
                  discount={discount}
                  collection={collection}
                  collectionAddress={curation}
                  goToProduct={() => navigate(getEditProductIdRoute(id))}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
