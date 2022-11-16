import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard';
import { FormatedProductData } from 'types';

type ProductCardListProps = {
  products: FormatedProductData[];
};

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  sm: 'repeat(3, 1fr)',
  md: 'repeat(3, 1fr)',
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
  <Box
    sx={{
      maxW: '768px',
      margin: '0 auto',
    }}
  >
    <Grid gap={3} templateColumns={templateColumns}>
      {products.map(
        ({ id, title, price, priceReduced, srcItem, discount, description, externalLink }) => (
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
            <ProductCard
              id={id}
              title={title}
              discount={discount}
              description={description}
              srcItem={srcItem}
              price={price}
              priceReduced={priceReduced}
              externalLink={externalLink}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
