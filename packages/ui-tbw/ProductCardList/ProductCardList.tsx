import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from '../ProductCard/ProductCard';

export type FormatedProductData = {
  id?: string;
  srcItem: string;
  title: string;
  discount?: string;
  price: string;
  priceReduced?: number;
  collection?: string;
  isTransparent?: boolean;
  isAnHolder?: boolean;
  poapUrl?: string;
  poapImgUrl?: string;
  description?: any;
  externalLink?: string;
  highlight?: boolean;
};

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
      {products?.map(
        ({
          id,
          title,
          price,
          priceReduced,
          srcItem,
          discount,
          description,
          externalLink,
          highlight,
        }) => (
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
              highlight={highlight}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
