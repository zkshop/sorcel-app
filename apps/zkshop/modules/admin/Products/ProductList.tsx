import {
  Box,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

import { PRODUCT_ATTRIBUTES } from "./constants";

import Header from "components/Header";
import { useGetProductsQuery } from "libs/apollo/generated";

export const Products = () => {
  const { data, error, loading } = useGetProductsQuery();
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

      <Box my={4}>
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
              {data.products.map((product, i) => (
                <Link key={i} href={`/admin/product/edit/${product.id}`}>
                  <Tr>
                    <Td>
                      <Box>
                        <Image
                          width={16}
                          height={16}
                          src={product.image}
                          alt={product.name}
                        />
                      </Box>
                    </Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.discount}</Td>
                    <Td>
                      {product.curation?.slice(0, 3)}...
                      {product.curation?.slice(-3)}
                    </Td>
                    <Td>{product.collection}</Td>
                  </Tr>
                </Link>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
