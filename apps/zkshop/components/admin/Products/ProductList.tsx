import {
  Box,
  Heading,
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
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useGetProductsQuery } from "../../../libs/apollo/generated";
import { PRODUCT_ATTRIBUTES } from "./constants";

const Products = () => {
  const { data, error, loading } = useGetProductsQuery();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Heading as="h3">
        <HStack justifyContent="space-between">
          <span>Products</span>
          <Link href="/admin/product/add">
            <Button>+ New Product</Button>
          </Link>
        </HStack>
      </Heading>

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
              {data.products.map((product) => (
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
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Products;
