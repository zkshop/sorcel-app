import { Box, Spinner, Table, TableContainer, Tbody, Th, Thead, Tr, Button, Header } from 'ui';
import Link from 'next/link';

import { PRODUCT_ATTRIBUTES } from './constants';
import { ProductListItem } from './ProductListItem';

import { useGetProductsQuery } from 'apollo';

export const Products = () => {
  const { data, error, loading } = useGetProductsQuery({
    variables: { appId: process.env.APP_ID },
  });

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Header title="Products">
        <Link href="/admin/product/add">
          <Button>+ New Product</Button>
        </Link>
      </Header>

      <Box
        my={4}
        sx={{
          bg: 'white',
          borderRadius: 'lg',
          p: 8,
          border: '1px solid lightgrey',
        }}
      >
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
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
