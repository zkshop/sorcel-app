import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ProductCard } from 'ui';
import { FormatedProductData } from 'types';

type ProductCardListProps = {
  products: FormatedProductData[];
};

const templateColumns = {
  xs: 'repeat(2, 1fr)',
  sm: 'repeat(3, 1fr)',
  md: 'repeat(4, 1fr)',
};

export const ProductCardList = ({ products }: ProductCardListProps) => (
  <Box>
    <Grid gap={8} templateColumns={templateColumns}>
      {products.map(
        ({
          id,
          title,
          collection,
          isAnHolder,
          isTransparent,
          poapUrl,
          poapImgUrl,
          price,
          priceReduced,
          srcItem,
          discount,
        }) => (
          <GridItem key={`products-${id}`} display="flex" justifyContent="center">
            <ProductCard
              id={id}
              title={title}
              discount={discount}
              srcItem={srcItem}
              price={price}
              priceReduced={priceReduced}
              poapUrl={poapUrl}
              poapImgUrl={poapImgUrl}
              isEligible={isAnHolder}
              isTransparent={isTransparent}
              collection={collection}
            />
          </GridItem>
        ),
      )}
    </Grid>
  </Box>
);
